const nodemailer = require('nodemailer');


function createTransporter() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS
    }
  });
  return transporter;
};


function sendPasswordResetEmail(email, passwordResetToken) {
  const resetLink = `${process.env.RESET_PAGE}?token=${passwordResetToken}`;

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Password Reset',
    text: `Hey! Please click the following link to reset your password: ${resetLink}`
  };

  const transporter = createTransporter();

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = {
  sendPasswordResetEmail
};