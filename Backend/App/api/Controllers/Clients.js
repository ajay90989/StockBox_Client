const db = require("../../Models");
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const BasicSetting_Modal = db.BasicSetting;
const Clients_Modal = db.Clients;
const { sendEmail } = require('../../Utils/emailService');
const axios = require('axios');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
const FormData = require('form-data');
const Mailtemplate_Modal = db.Mailtemplate;
const Refer_Modal = db.Refer;
const Payout_Modal = db.Payout;
const Helpdesk_Modal = db.Helpdesk;


class Clients {


  async AddClient(req, res) {

    try {
      const { FullName, Email, PhoneNo, password, token } = req.body;

      if (!FullName) {
        return res.status(400).json({ status: false, message: "Please enter fullname" });
      }
     
      if (!Email) {
        return res.status(400).json({ status: false, message: "Please enter email" });
      } else if (!/^\S+@\S+\.\S+$/.test(Email)) {
        return res.status(400).json({ status: false, message: "please enter valid email" });
      }
      
      if (!PhoneNo) {
        return res.status(400).json({ status: false, message: "Please enter phone number" });
      } else if (!/^\d{10}$/.test(PhoneNo)) {
        return res.status(400).json({ status: false, message: "Please enter valid phone number" });
      }
      if (!password || password.length < 8 || 
          !/[A-Z]/.test(password) || 
          !/[a-z]/.test(password) || 
          !/\d/.test(password) || 
          !/[@$!%*?&#]/.test(password)) {
        return res.status(400).json({ 
          status: false, 
          message: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&#)" 
        });
      }
  

     

      const existingUser = await Clients_Modal.findOne({
        $and: [
          { del: 0 },
          {
            $or: [{ Email }, { PhoneNo }]
          }
        ]
      });


  
      if (existingUser) {
        if (existingUser.Email === Email) {
          return res.status(400).json({ status: false, message: "Email already exists" });
        } else if (existingUser.PhoneNo === PhoneNo) {
          return res.status(400).json({ status: false, message: "Phone number already exists" });
        }
      }



      const settings = await BasicSetting_Modal.findOne();
      if (!settings || !settings.smtp_status) {
        throw new Error('SMTP settings are not configured or are disabled');
      }




      const hashedPassword = await bcrypt.hash(password, 10);

      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let refer_token = '';
      const length = 10; // Length of the token
      while (refer_token.length < length) {
          const byte = crypto.randomBytes(1);
          const index = byte[0] % characters.length;
          refer_token += characters[index];
      }
      

      const refer_tokens = crypto.randomBytes(10).toString('hex'); 




      const result = new Clients_Modal({
      FullName: FullName,
      Email: Email,
      PhoneNo: PhoneNo,
      password: hashedPassword,
      refer_token:refer_token,
      token:refer_tokens,
      });



      await result.save();



      if(token) {
        const refertoken = await Clients_Modal.findOne({ refer_token:token,del:0,ActiveStatus:1 });
    
        if (!refertoken) {
            return res.status(400).json({ status: false, message: "Referral code doesn't exists" });
        }
  
        const results = new Refer_Modal({
          token: token,
          user_id: result._id,
          senderearn: settings.sender_earn,
          receiverearn: settings.receiver_earn
          })
          await results.save();
        }
  



    const resetToken = Math.floor(100000 + Math.random() * 900000); 


      const mailtemplate = await Mailtemplate_Modal.findOne({ mail_type: 'client_verification_mail' }); // Use findOne if you expect a single document
      if (!mailtemplate || !mailtemplate.mail_body) {
          throw new Error('Mail template not found');
      }

      const templatePath = path.join(__dirname, '../../../template', 'mailtemplate.html');
      
    
      fs.readFile(templatePath, 'utf8', async (err, htmlTemplate) => {
        if (err) {
            console.error('Error reading HTML template:', err);
            return;
        }

        const finalMailBody = mailtemplate.mail_body.replace('{resetToken}', resetToken);
        const logo =`http://${req.headers.host}/uploads/basicsetting/${settings.logo}`;

        // Replace placeholders with actual values
        const finalHtml = htmlTemplate
            .replace(/{{company_name}}/g, settings.website_title)
            .replace(/{{body}}/g, finalMailBody)
            .replace(/{{logo}}/g, logo)
            .replace(/{{resetToken}}/g, resetToken);
    
        // Email options
        const mailOptions = {
            to: result.Email,
            from: `${settings.from_name} <${settings.from_mail}>`, // Include business name
            subject: `${mailtemplate.mail_subject}`,
            html: finalHtml // Use the HTML template with dynamic variables
        };
    
        // Send email
        await sendEmail(mailOptions);
    });

        // const mailOptions = {
        //   to: result.Email,
        //   from: `${settings.from_name} <${settings.from_mail}>`, 
        //   subject: 'Password Reset',
        //   text: `Your verification code is: ${resetToken}. This code is valid for 10 minutes. Please do not share this code with anyone.`,
        // };
    
        // await sendEmail(mailOptions);


      return res.json({
        status: true,
        otp:resetToken,
        email:Email,
        message: "OTP has been sent to your email. Please check your email.",
      });

    } catch (error) {
     
      return res.json({
        status: false,
        message: "Server error",
        data: [],
      });
    }
  }

  async detailClient(req, res) {
    try {
        // Extract ID from request parameters
        const { id } = req.params;

        // Check if ID is provided
        if (!id) {
            return res.status(400).json({
                status: false,
                message: "Client ID is required"
            });
        }

        // Find client by ID
        const client = await Clients_Modal.findById(id);

        // If client not found
        if (!client) {
            return res.status(404).json({
                status: false,
                message: "Client not found"
            });
        }

        return res.json({
            status: true,
            message: "Client details fetched successfully",
            data: client
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Server error",
            data: []
        });
    }
}

async loginClient(req, res) {
  try {
    const { UserName, password, devicetoken } = req.body;  // Extract password here
    
    if (!UserName) {
      return res.status(400).json({ status: false, message: "Please enter email/phone number" });
    }
   

    if (!password) {
      return res.status(400).json({ status: false, message: "Please enter password" });
    }
   

   
    const client = await Clients_Modal.findOne({
      $or: [{ Email: UserName }, { PhoneNo : UserName }],  // Check for email or mobile
      ActiveStatus: '1',
      del: '0'   // Make sure ActiveStatus is compared as a string
    });

    if (!client) {
      return res.status(404).json({
        status: false,
        message: "client not found or account is inactive",
      });
    }

   
    const isMatch = await bcrypt.compare(password, client.password);
    if (!isMatch) {
      return res.status(401).json({
        status: false,
        message: "Invalid Password!",
      });
    }

     

    const token = crypto.randomBytes(10).toString('hex'); // 10 bytes = 20 hex characters
    client.token = token;
    client.devicetoken = devicetoken;
    await client.save();

    return res.json({
      status: true,
      message: "Login successful",
      data: {
        FullName: client.FullName,
        Email: client.Email,
        PhoneNo: client.PhoneNo,
        id: client.id,
        token: token,
        angleredirecturl: `http://${req.headers.host}/backend/angle/getaccesstoken?key=${client._id}`,
        aliceredirecturl: `http://${req.headers.host}/backend/aliceblue/getaccesstoken?key=${client._id}` },
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Server error",
      error: error.message,
    });
  }
}
async forgotPassword(req, res) {

  try {
    const { Email } = req.body;

    if (!Email) {
      return res.status(400).json({ status: false, message: "Please enter valid email" });
    }
   
    
    // Find the user by email
    const client = await Clients_Modal.findOne({ Email });
    if (!client) {
      return res.status(404).json({
        status: false,
        message: "Email does not exist",
      });
    }

    // Generate a reset token
    const resetToken = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit OTP
    //const resetToken = crypto.randomBytes(20).toString('hex');

    // Set the token and expiry on the user
    client.forgotPasswordToken = resetToken;
    client.forgotPasswordTokenExpiry = Date.now() + 600000; // 1 hour from now

    await client.save();

    const settings = await BasicSetting_Modal.findOne();
  if (!settings || !settings.smtp_status) {
    throw new Error('SMTP settings are not configured or are disabled');
  }



  const mailtemplate = await Mailtemplate_Modal.findOne({ mail_type: 'client_password_reset' }); // Use findOne if you expect a single document
      if (!mailtemplate || !mailtemplate.mail_body) {
          throw new Error('Mail template not found');
      }

      const templatePath = path.join(__dirname, '../../../template', 'mailtemplate.html');
      
    
      fs.readFile(templatePath, 'utf8', async (err, htmlTemplate) => {
        if (err) {
            console.error('Error reading HTML template:', err);
            return;
        }

        const finalMailBody = mailtemplate.mail_body.replace('{resetToken}', resetToken);
        const logo =`http://${req.headers.host}/uploads/basicsetting/${settings.logo}`;
        // Replace placeholders with actual values
        const finalHtml = htmlTemplate
            .replace(/{{company_name}}/g, settings.website_title)
            .replace(/{{body}}/g, finalMailBody)
            .replace(/{{logo}}/g, logo)
            .replace(/{{resetToken}}/g, resetToken);
    
        // Email options
        const mailOptions = {
            to: client.Email,
            from: `${settings.from_name} <${settings.from_mail}>`, // Include business name
            subject: `${mailtemplate.mail_subject}`,
            html: finalHtml // Use the HTML template with dynamic variables
        };
        // Send email
        await sendEmail(mailOptions);
    });


  

    return res.json({
      status: true,
      message: 'OTP has been sent to your email. Please check your email.',
    });

  } catch (error) {
    console.log("Error in forgotPassword:", error);
    return res.status(500).json({
      status: false,
      message: "Server error",
      error: error.message,
    });
  }
}


async resetPassword(req, res) {
  try {
    const { resetToken, newPassword } = req.body;

    if (!resetToken) {
      return res.status(400).json({
        status: false,
        message: "Please enter otp",
      });
    }

    if (!newPassword) {
      return res.status(400).json({
        status: false,
        message: "Please enter new password",
      });
    }

   // if (!confirmPassword) {
   //   return res.status(400).json({
   //     status: false,
   //     message: "Please confirm your password",
   //   });
   // }
    
    //if (newPassword !== confirmPassword) {
    //  return res.status(400).json({
    //    status: false,
    //    message: "New password and confirm password do not match",
    //  });
    // }

    // Find the user by reset token and check if the token is valid
    const client = await Clients_Modal.findOne({
      forgotPasswordToken: resetToken,
      forgotPasswordTokenExpiry: { $gt: Date.now() } // Token should not be expired
    });


    if (!client) {
      return res.status(400).json({
        status: false,
        message: "Otp is invalid or expired",
      });
    }

    // Hash the new password
    
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password and clear the reset token
    client.password = hashedPassword;
    client.forgotPasswordToken = undefined; // Clear the token
    client.forgotPasswordTokenExpiry = undefined; // Clear the expiry

    await client.save();

    return res.json({
      status: true,
      message: "Password has been reset successfully",
    });

  } catch (error) {
    console.log("Error in resetPassword:", error);
    return res.status(500).json({
      status: false,
      message: "Server error",
      error: error.message,
    });
  }
}


  async changePassword(req, res) {
    try {
      const { id, currentPassword, newPassword } = req.body;

      
      if (!currentPassword) {
        return res.status(400).json({
          status: false,
          message: "Please enter current password",
        });
      }

      if (!newPassword) {
        return res.status(400).json({
          status: false,
          message: "Please enter new password",
        });
      }


      // Find the user by ID
      const client = await Clients_Modal.findById(id);

      if (!client) {
        return res.status(404).json({
          status: false,
          message: "Client not found",
        });
      }

      // Check if the current password is correct
      const isMatch = await bcrypt.compare(currentPassword, client.password);

      if (!isMatch) {
        return res.status(401).json({
          status: false,
          message: "Current password is incorrect",
        });
      }

      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Update the user's password
      client.password = hashedPassword;
      await client.save();

      return res.json({
        status: true,
        message: "Password changed successfully",
      });

    } catch (error) {
      console.log("Error in changePassword:", error);
      return res.status(500).json({
        status: false,
        message: "Server error",
        error: error.message,
      });
    }
  }
  
  async updateProfile(req, res) {
    try {
        const { id, FullName } = req.body;

        if (!FullName) {
          return res.status(400).json({ status: false, message: "Please enter name" });
        }

        // Ensure the user ID is provided
        if (!id) {
            return res.status(400).json({
                status: false,
                message: "Something went wrong",
            });
        }

        // Find the user by ID
        const client = await Clients_Modal.findById(id);
        if (!client) {
            return res.status(404).json({
                status: false,
                message: "Client not found",
            });
        }

        // Update the user's profile information
        if (FullName) client.FullName = FullName;
      
        await client.save();

        return res.json({
            status: true,
            message: "Profile updated successfully",
            data: {
                id: client.id,
                FullName: client.FullName,
                Email: client.Email,
                PhoneNo: client.PhoneNo,
            }
        });

    } catch (error) {
        console.log("Error in updateProfile:", error);
        return res.status(500).json({
            status: false,
            message: "Server error",
            error: error.message,
        });
    }
}

async deleteClient(req, res) {
  try {
    const { id } = req.params; // Extract ID from URL params

    if (!id) {
      return res.status(400).json({
        status: false,
        message: "Client ID is required",
      });
    }

  const deletedClient = await Clients_Modal.findByIdAndUpdate(
    id, 
    { del: 1 }, // Set del to true
    { new: true }  // Return the updated document
  );
    if (!deletedClient) {
      return res.status(404).json({
        status: false,
        message: "Client not found",
      });
    }

    console.log("Deleted Client:", deletedClient);
    return res.json({
      status: true,
      message: "Client deleted successfully",
      data: deletedClient,
    });
  } catch (error) {
    console.log("Error deleting client:", error);
    return res.status(500).json({
      status: false,
      message: "Server error",
      error: error.message,
    });
  }
}

async otpSubmit(req, res) {
  try {
    const { otp, email } = req.body;

    if (!otp) {
      return res.status(400).json({
        status: false,
        message: "Please enter otp",
      });
    }

    // Find the user by reset token and check if the token is valid
    const client = await Clients_Modal.findOne({
      Email: email
    });


    if (!client) {
      return res.status(400).json({
        status: false,
        message: "Something went wrong",
      });
    }

    client.ActiveStatus = 1;
    await client.save();

    return res.json({
      status: true,
      message: "Your registration is successfull",
    });

  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Server error",
      error: error.message,
    });
  }
}


async  aadhaarVerification(req, res) {
  try {
    const { aadhaarNumber, id } = req.body; // Extract Aadhaar number and id from request body

    // Validate that Aadhaar number is provided
    if (!aadhaarNumber) {
      return res.status(400).json({
        status: false,
        message: "Please provide Aadhaar number",
      });
    }

    const settings = await BasicSetting_Modal.findOne();
      if (!settings || !settings.surepass_token) {
        throw new Error('Sure Pass settings are not configured or are disabled');
      }   

    // Aadhaar verification API token
    const apiToken = settings.surepass_token;

    // Aadhaar verification API call
    const response = await axios.post(
      'https://kyc-api.aadhaarkyc.io/api/v1/aadhaar-v2/generate-otp',
      {
        id_number: aadhaarNumber
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiToken}`,
        }
      }
    );

    return res.status(200).json({
      status: true,
      message: "OTP generated successfully",
      data: response.data, // Respond with the data from the API
    });

  } catch (error) {

    if (error.response) {

      return res.status(error.response.status).json({
        status: false,
        message: error.response.data.message || "Failed to generate OTP",
        error: error.response.data,
      });
    } else {

      return res.status(500).json({
        status: false,
        message: "Server error during Aadhaar verification",
        error: error.message,
      });
    }
  }
}




async  aadhaarOtpSubmit(req, res) {
  try {
    const { client_id,otp, id } = req.body; // Extract Aadhaar number and id from request body

    // Validate that Aadhaar number is provided
    if (!otp) {
      return res.status(400).json({
        status: false,
        message: "Please Enter Otp",
      });
    }

    const settings = await BasicSetting_Modal.findOne();
      if (!settings || !settings.surepass_token) {
        throw new Error('Sure Pass settings are not configured or are disabled');
      }   

    // Aadhaar verification API token
    const apiToken = settings.surepass_token;

    // Aadhaar verification API call
    const response = await axios.post(
      'https://kyc-api.aadhaarkyc.io/api/v1/aadhaar-v2/submit-otp',
      {
        "client_id":client_id,
        "otp":otp
    },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiToken}`,
        }
      }
    );

    return res.status(200).json({
      status: true,
      message: "Aadhaar Verification successfully",
      data: response.data, // Respond with the data from the API
    });

  } catch (error) {

    if (error.response) {

      return res.status(error.response.status).json({
        status: false,
        message: error.response.data.message || "Failed to generate OTP",
        error: error.response.data,
      });
    } else {

      return res.status(500).json({
        status: false,
        message: "Server error during Aadhaar verification",
        error: error.message,
      });
    }
  }
}




async  clientKycAndAgreement(req, res) {
  try {
    // Extract data from the request body
    const email = req.body.email;
    const name = req.body.name;
    const phone = req.body.phone;
    const panno = req.body.panno;
    const aadhaarno = req.body.aadharno;
    const id = req.body.id;

    const refid = Math.floor(10000 + Math.random() * 90000); // Generate a random reference ID

    const client = await Clients_Modal.findOne({ _id: id });

    if (!client) {
        return res.status(400).json({
            status: false,
            message: "Client not found",
        });
    }

    const settings = await BasicSetting_Modal.findOne();
    if (!settings || !settings.digio_client_id || !settings.digio_client_secret) {
        return res.status(500).json({ error: 'Digio settings are not configured or are disabled' });
    }

    const company_name = settings.website_title;
    const company_address = settings.address;

    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours() % 12 || 12).padStart(2, '0'); // 12-hour format
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'pm' : 'am';
    const datetime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}${ampm}`;

    // PDF generation section
    const templatePath = path.join(__dirname, '../../../template', 'kyc-agreement-template.html');
    let htmlContent = fs.readFileSync(templatePath, 'utf8');

    // Replace placeholders with actual values
    htmlContent = htmlContent
        .replace(/{{name}}/g, name)
        .replace(/{{email}}/g, email)
        .replace(/{{phone}}/g, phone)
        .replace(/{{panno}}/g, panno)
        .replace(/{{datetime}}/g, datetime)
        .replace(/{{company_name}}/g, company_name)
        .replace(/{{company_address}}/g, company_address)
        .replace(/{{aadhaarno}}/g, aadhaarno);

   // const browser = await puppeteer.launch();
   const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
       });
    const page = await browser.newPage();
    await page.setContent(htmlContent);

    // Define the path to save the PDF
    const pdfDir = path.join(__dirname, '../../../../stockboxpnp.pnpuniverse.com/uploads', 'pdf');
    const pdfPath = path.join(pdfDir, `kyc-agreement-${phone}.pdf`);
    
    // Generate PDF and save to the specified path
    await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: {
            top: '20mm',
            right: '10mm',
            bottom: '50mm',
            left: '10mm',
        },
    });

    await browser.close();

    // Update client with new information
    client.panno = panno;
    client.aadhaarno = aadhaarno;
    client.pdf = `kyc-agreement-${phone}.pdf`;
    await client.save();

    // Aadhaar verification API token
    const digio_client_id = settings.digio_client_id;
    const digio_client_secret = settings.digio_client_secret;
    const digio_template_name = settings.digio_template_name;
    const authToken = Buffer.from(`${digio_client_id}:${digio_client_secret}`).toString('base64');

    const payload = JSON.stringify({   
        customer_identifier: phone,
        customer_name: name,
        reference_id: refid,
        template_name: digio_template_name,
        notify_customer: false,
        request_details: {},
        transaction_id: refid,
        generate_access_token: true
    });

    // Make the POST request to Digio API using Axios
    const response = await axios.post(
        'https://api.digio.in/client/kyc/v2/request/with_template',
        payload,
        {
            headers: {
                'Authorization': `Basic ${authToken}`,
                'Content-Type': 'application/json'
            },
            timeout: 300000,
        }
    );



    const resData = response.data;

    if (resData && resData.status === 'requested') {
        const kid = resData.id;
        const customer_identifier = resData.customer_identifier;
        const gid = resData.access_token.id;

        const data = {
            kid,
            customer_identifier,
            gid
        };
        return res.json(data); // Ensure only one response is sent
    } else {
        return res.status(400).json({ error: 'Digio status is not requested' });
    }

} catch (error) {
    console.error('Error in submitting KYC:', error.message);
    return res.status(500).json({ error: 'CURL request failed', details: error.message });
}

}

async uploadDocument(req, res) {
  const id = req.body.id;
  
  // Fetch client details
  const client = await Clients_Modal.findOne({ _id: id });
  if (!client) {
      return res.status(400).json({
          status: false,
          message: "Client not found",
      });
  }

  // Fetch Digio settings
  const settings = await BasicSetting_Modal.findOne();
  if (!settings || !settings.digio_client_id || !settings.digio_client_secret) {
      return res.status(500).json({
          status: false,
          message: 'Digio settings are not configured or missing',
      });
  }

  // Extract Digio credentials
  const digio_client_id = settings.digio_client_id;
  const digio_client_secret = settings.digio_client_secret;

  // Path to the PDF document
  const filename = client.pdf;
  const dir = path.join(__dirname, '../../../../stockboxpnp.pnpuniverse.com/uploads/pdf', filename);

  if (!fs.existsSync(dir)) {
      return res.status(400).json({
          status: false,
          message: 'PDF file not found',
      });
  }

  // Create form-data with the PDF file
  const form = new FormData();
  form.append('file', fs.createReadStream(dir), {
      filename: filename,
      contentType: 'application/pdf'
  });

  // Prepare the request body for signing
  const requestBody = {
      signers: [{
          identifier: client.PhoneNo,
          aadhaar_id: client.aadhaarno,
          reason: 'Contract'
      }],
      sign_coordinates: {
          [client.PhoneNo]: {
              "1": [{ llx: 315, lly: 160, urx: 600, ury: 60 }],
              "2": [{ llx: 315, lly: 160, urx: 600, ury: 60 }],
              "3": [{ llx: 315, lly: 160, urx: 600, ury: 60 }]
          }
      },
      expire_in_days: 10,
      display_on_page: "custom",
      notify_signers: true,
      send_sign_link: true
  };

  // Add the request payload to the form
  form.append('request', JSON.stringify(requestBody));

  // Prepare the Authorization header
  const authToken = Buffer.from(`${digio_client_id}:${digio_client_secret}`).toString('base64');

  try {
      // Send the request to upload the document and get Digio response
      const response = await axios.post('https://api.digio.in/v2/client/document/upload', form, {
          headers: {
              ...form.getHeaders(),
              'Authorization': `Basic ${authToken}`
          }
      });

      // Process the response data
      const refid = Math.floor(10000 + Math.random() * 90000); // Generate a random reference ID
      const doc_id = response.data.id;
      const email = client.Email;
      const PhoneNo = client.PhoneNo;
      // Define the redirect URL
      const baseUrl = "https://app.digio.in/#/gateway/login/";
      const redirectUrl = encodeURIComponent(`http://${req.headers.host}`);

      const fullUrl = `${baseUrl}${doc_id}/${refid}/${PhoneNo}?redirect_url=${redirectUrl}`;

      // Respond with the redirect URL or use it on the frontend
      return res.json({
          status: true,
          message: 'Document uploaded successfully',
          redirectUrl: fullUrl
      });

  } catch (error) {
      console.error('Error uploading document:', error.response ? error.response.data : error.message);
      return res.status(400).json({ error: 'Error uploading document to Digio' });
  }
}
async downloadDocument(req, res) {
  try {
      const { id, doc_id } = req.body;

      // Fetch client details
      const client = await Clients_Modal.findById(id);
      if (!client) {
          return res.status(404).json({
              status: false,
              message: "Client not found",
          });
      }

      // Fetch Digio settings
      const settings = await BasicSetting_Modal.findOne();
      if (!settings || !settings.digio_client_id || !settings.digio_client_secret) {
          return res.status(500).json({
              status: false,
              message: 'Digio settings are not configured or missing',
          });
      }

      // Prepare the authentication token
      const authToken = Buffer.from(`${settings.digio_client_id}:${settings.digio_client_secret}`).toString('base64');

      // Define the API endpoint with the document ID
      const url = `https://api.digio.in/v2/client/document/download?document_id=${doc_id}`;

      // Make a GET request to download the document
      const response = await axios.get(url, {
          headers: {
              'Authorization': `Basic ${authToken}`,
              'Content-Type': 'application/json'
          },
          responseType: 'arraybuffer'  // Handle binary data like PDF
      });

      // Generate a unique filename
      const fileName = `kyc-agreement-${client.PhoneNo}.pdf`;
      const tempPath = path.join(__dirname, '../../../../stockboxpnp.pnpuniverse.com/uploads/pdf', fileName);

      // Ensure the directory exists
      await fs.promises.mkdir(path.dirname(tempPath), { recursive: true });

      // Write the downloaded content to a PDF file
      await fs.promises.writeFile(tempPath, response.data);

      // Update client record
      client.kyc_verification = 1;
      client.pdf = fileName;  // Set the PDF filename
      await client.save();

      // Return the file name or path for further use
      res.json({
          status: true,
          pdf: fileName,
          message: 'Document downloaded and saved successfully'
      });
  } catch (error) {
      console.error('Error downloading the document:', error);
      return res.status(500).json({
          status: false,
          message: 'Failed to download the document',
          error: error.message || 'An unknown error occurred'
      });
  }
}

async requestPayout(req, res) {
  try {
    const { clientId, amount } = req.body;

    // Validate input
    if (!clientId || amount <= 0) {
      return res.status(400).json({ status: false, message: 'Invalid client ID or amount.' });
    }

    // Fetch the client record
    const client = await Clients_Modal.findOne({ _id: clientId, del: 0, ActiveStatus: 1 });

    if (!client) {
      return res.status(404).json({ status: false, message: 'Client not found or inactive.' });
    }

    // Check if the requested amount is below the minimum withdrawal limit
    const minimumWithdrawal = 500;
    if (amount < minimumWithdrawal) {
      return res.status(400).json({ status: false, message: `Minimum withdrawal amount is ${minimumWithdrawal}.` });
    }

    // Check if the client has enough wamount
    if (client.wamount < amount) {
      return res.status(400).json({ status: false, message: 'Insufficient funds in wamount.' });
    }

    // Deduct the amount from client's wamount
    client.wamount -= amount;
    await client.save();

    // Create a new payout request
    const payoutRequest = new Payout_Modal({
      clientid: clientId,
      amount: amount,
    });

    await payoutRequest.save();

    return res.status(201).json({
      status: true,
      message: 'Payout request submitted successfully.',
      data: payoutRequest,
    });

  } catch (error) {
    console.error('Error processing payout request:', error);
    return res.status(500).json({ status: false, message: 'Server error while processing payout request.' });
  }
}

async payoutList(req, res) {
  try {

    const { id } = req.body;  // Extract the client ID from the request parameters
    const result = await Payout_Modal.find({ clientid: id });  // Fetch payouts for the given client ID

    return res.json({
      status: true,
      message: "get",
      data: result  // Return the fetched payouts
    });
  } catch (error) {
    return res.json({ status: false, message: "Server error", data: [] });  // Error handling
  }
}

async referEarn(req, res) {
  try {
    const { id } = req.body;  // Extract the client ID from the request parameters

    const client = await Clients_Modal.findById(id);

    // If client not found
    if (!client) {
        return res.status(404).json({
            status: false,
            message: "Client not found"
        });
    }

    const result = await Refer_Modal.find({
      $or: [
        { user_id: id },      // Check if user_id matches
        { token: client.refer_token }  // Check if token matches
      ]
    });
    
    // Process result to show receiveramount or senderamount based on the condition
    const processedResult = await Promise.all(result.map(async (entry) => {
      let amountType = null;
      let clientName = null;

      // Check if user_id matched, show receiveramount
      if (entry.user_id.toString() === id.toString()) {
        // Fetch the client based on the token
        const relatedClient = await Clients_Modal.findOne({ refer_token: entry.token });
        clientName = relatedClient ? relatedClient.FullName : "";

        amountType = {
          type: 'receiver',
          amount: entry.receiveramount
        };
      }
      // Check if token matched, show senderamount
      else if (entry.token === client.refer_token) {
        // Fetch the client based on the user_id
        const relatedClient = await Clients_Modal.findById(entry.user_id);
        clientName = relatedClient ? relatedClient.FullName : "";

        amountType = {
          type: 'sender',
          amount: entry.senderamount
        };
      }
    
      // Return the entry along with the appropriate amount and client name
      return {
        ...entry.toObject(),
        amountType,
        clientName
      };
    }));
    
    // Respond with the processed result
    return res.json({
      status: true,
      message: "Data retrieved successfully",
      data: processedResult
    });
  } catch (error) {
    return res.json({ status: false, message: "Server error", data: [] });  // Error handling
  }
}


async brokerLink(req, res) {
  try {
    const { id, apikey, apisecret, alice_userid, brokerid } = req.body;

    // Find client by ID
    const client = await Clients_Modal.findById(id);

    if (!client) {
      return res.status(404).json({
        status: false,
        message: "Client not found",
      });
    }

    // Update client details
    client.apikey = apikey;
    client.apisecret = apisecret;
    client.brokerid = brokerid;
    client.alice_userid = alice_userid;
    await client.save();

    // Initialize the url variable
    let url;

    // Conditional URL assignment based on brokerid
    if (brokerid == 1) {
      url = `https://smartapi.angelone.in/publisher-login?api_key=${apikey}`;
    } else {
      url =  `https://ant.aliceblueonline.com/?appcode=${apikey}`; 
    }

    // Return the response
    return res.json({
      status: true,
      url: url,
      message: "Api Added successfully",
    });

  } catch (error) {
    // Handle server errors
    return res.status(500).json({
      status: false,
      message: "Server error",
      error: error.message,
    });
  }
}

async deleteBrokerLink(req, res) {
  try {
    const { id } = req.body;
    // Find client by ID
    const client = await Clients_Modal.findById(id);

    if (!client) {
      return res.status(404).json({
        status: false,
        message: "Client not found",
      });
    }

    // Update client details
    client.apikey = "";
    client.apisecret = "";
    client.brokerid = 0;
    client.alice_userid = "";
    client.authtoken = "";
    client.dlinkstatus = 0;
    client.tradingstatus = 0;
   
    await client.save();

    return res.json({
      status: true,
      message: "Broker Deleted successfully",
    });

  } catch (error) {
    // Handle server errors
    return res.status(500).json({
      status: false,
      message: "Server error",
      error: error.message,
    });
  }
}


async addHelpDesk(req, res) {

  
  try {
    const { client_id, subject, message } = req.body;

    if (!subject) {
      return res.status(400).json({ status: false, message: "Please enter subject" });
    }
   
    if (!message) {
      return res.status(400).json({ status: false, message: "Please enter message" });
    }


    const client = await Clients_Modal.findOne({ _id: client_id, del: 0, ActiveStatus: 1 });

    if (!client) {
      return res.status(404).json({ status: false, message: 'Client not found or inactive.' });
    }
    
    const result = new Helpdesk_Modal({
      subject: subject,
      message: message,
      client_id: client_id,
    })
   
    await result.save();    

    return res.json({
      status: true,
      message: "Data add successfully.",
    });

  } catch (error) {
    return res.json({
      status: false,
      message: "Server error",
      data: [],
    });
  }
}


async helpdeskList(req, res) {
  try {

    const { id } = req.params; // Extract client_id from query parameters
    console.log("Client ID:", id); // Log the client_id for debugging

    // Step 1: Fetch helpdesk entries for the specified client_id
    const result = await Helpdesk_Modal.find({ client_id: id });

    // Step 2: Return the fetched helpdesk data
    return res.json({
      status: true,
      message: "Data retrieved successfully",
      data: result
    });

  } catch (error) {
    console.error("Error fetching helpdesk:", error); // Log the error for debugging
    return res.json({ status: false, message: "Server error", data: [] });
  }
}



async resend(req, res) {
  try {

    const { email } = req.body;
const resetToken = Math.floor(100000 + Math.random() * 900000); 


const mailtemplate = await Mailtemplate_Modal.findOne({ mail_type: 'client_verification_mail' }); // Use findOne if you expect a single document
if (!mailtemplate || !mailtemplate.mail_body) {
    throw new Error('Mail template not found');
}



const settings = await BasicSetting_Modal.findOne();
  if (!settings || !settings.smtp_status) {
    throw new Error('SMTP settings are not configured or are disabled');
  }



const templatePath = path.join(__dirname, '../../../template', 'mailtemplate.html');



fs.readFile(templatePath, 'utf8', async (err, htmlTemplate) => {
  if (err) {
      console.error('Error reading HTML template:', err);
      return;
  }

  const finalMailBody = mailtemplate.mail_body.replace('{resetToken}', resetToken);
  const logo =`http://${req.headers.host}/uploads/basicsetting/${settings.logo}`;
  // Replace placeholders with actual values
  const finalHtml = htmlTemplate
      .replace(/{{company_name}}/g, settings.website_title)
      .replace(/{{body}}/g, finalMailBody)
      .replace(/{{logo}}/g, logo)
      .replace(/{{resetToken}}/g, resetToken);

  // Email options
  const mailOptions = {
      to: email,
      from: `${settings.from_name} <${settings.from_mail}>`, // Include business name
      subject: `${mailtemplate.mail_subject}`,
      html: finalHtml // Use the HTML template with dynamic variables
  };

  // Send email
  await sendEmail(mailOptions);
});



return res.json({
  status: true,
  otp:resetToken,
  email:email,
  message: "OTP has been sent to your email. Please check your email.",
});

  } catch (error) {
    console.error("Error fetching :", error); // Log the error for debugging
    return res.json({ status: false, message: "Server error", data: [] });
  }
}



}
module.exports = new Clients();