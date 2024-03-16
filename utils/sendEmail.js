const nodemailer = require("nodemailer");

const sendEmail = async(options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD
        }   
    })

    const message = {
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`, 
        to: options.email, // list of receivers
        subject: options.subject, // Subject line
        text: options.message // plain text body
        //html: "<b>Hello world?</b>", // html body
      };

      const info = await transporter.sendMail(message);

      console.log('Message Sent: %s', info.messageId);
}

module.exports = sendEmail;
