const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

module.exports = {
  async sendMail() {
    // let testAccount = await nodemailer.createTestAccount();
    // console.log(testAccount);

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'i5xogl3gdifcecas@ethereal.email', // generated ethereal user
        pass: '2DXSsm6S4vAtszCnRD', // generated ethereal password
      },
    });
    let info = await transporter.sendMail({
      from: `"Admin A" <i5xogl3gdifcecas@ethereal.email>`, // sender address
      to: "eunice73@ethereal.email (huongnguyen08.cv@gmail.com", // list of receivers
      subject: "Test mail 22222",
      text: "Hello world?", // plain text body
      html: "<b style='color:red'>Hello world?</b>", // html body
    });
    console.log("Message sent: %s", info.messageId);
  }
}