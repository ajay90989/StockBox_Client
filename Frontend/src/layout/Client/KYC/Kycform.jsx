import { useFormik } from "formik";
import FormicForm from "../../../components/Newformicform";
import axios from 'axios';

const KycForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      panno: "",
      aadharno: "",
      phone: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Required";
      } else if (values.name.length < 3) {
        errors.name = "Name should be atleast 3 characters";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.phone) {
        errors.phone = "Required";
      }else if (values.phone.length < 10) {
        errors.phone = "Phone should be atleast 10 characters";
      } else if (values.phone.length > 10) {
        errors.phone = "Phone should be atmost 10 characters";
      }


      if (!values.panno) {
        errors.panno = "Required";
      } else if (values.panno.length < 10) {
        errors.panno = "Pancard should be atleast 10 characters";
      }else if (values.panno.length > 10) {
        errors.panno = "Pancard should be atmost 10 characters";
      }

      if (!values.aadharno) {
        errors.aadharno = "Required";
      } else if (values.aadharno.length < 12) {
        errors.aadharno = "Aadhar should be atleast 12 characters";
      } else if (values.aadharno.length > 12) {
        errors.aadharno = "Aadhar should be atmost 12 characters";
      }

      return errors;
    },

    onSubmit: (values) => {
      console.log("Form data", values);

      let data = {
        ...values,
        id:"66d2c3bebf7e6dc53ed07626"
      }
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:5001/api/client/clientkycandagreement',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      



    },
  });

  let fieldtype = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
      label_size: 5,
      col_size: 6,
      disable: false,
    },

    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Name",
      required: true,
      label_size: 5,
      col_size: 6,
      disable: false,
    },
    {
      name: "phone",
      label: "Phone",
      type: "text",
      placeholder: "Phone",
      required: true,
      label_size: 5,
      col_size: 6,
      disable: false,
    },
    {
      label: "Pancard Number",
      name: "panno",
      type: "text",
      placeholder: "Pancard Number",
      required: true,
      label_size: 5,
      col_size: 6,
      disable: false,
    },
    {
      label: "Aadhar Number",
      name: "aadharno",
      type: "text",
      placeholder: "Aadhar Number",
      required: true,
      label_size: 5,
      col_size: 6,
      disable: false,
    },
  ];

  return (
    <div className="page-content">
      <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div className="breadcrumb-title pe-3">KYC</div>
        <div className="ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item">
                <a href="/admin/dashboard">
                  <i className="bx bx-home-alt" />
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <hr />
      <div className="card">
        <div className="card-body">
          <FormicForm
            fieldtype={fieldtype}
            formik={formik}
            // Heading="Kyc Form"
            ButtonName="Add Kyc"
            BtnStatus={true}
          />
        </div>
      </div>
    </div>
  );
};

export default KycForm;
