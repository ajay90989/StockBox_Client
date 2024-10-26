const admin = require('firebase-admin');
const serviceAccount = require('../../template/stockbox-15e55-firebase-adminsdk-1zz93-c91de27a7e.json');
// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  console.log('Initializing Firebase Admin SDK...');
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
  console.log('Firebase Admin SDK initialized.');
}

async function sendFCMNotification(title, body, token) {

// console.log(token);
  const message = {
    token: token,
    notification: {
      title: title,
      body: body,
    },
    data: {
      additional_data: 'value',
    },
  };

  try {
    const response = await admin.messaging().send(message);
    console.log('Notification sent successfully:', response);
    return response; 
  } catch (error) {
    console.error('Error sending notification:', error);
    throw error; 
  }
}

module.exports = { sendFCMNotification };
