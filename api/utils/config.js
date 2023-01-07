require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  bookstackKey: process.env.BOOKSTACK_KEY,
  bookstackApi: process.env.BOOKSTACK_API,
  bookstackUrl: process.env.BOOKSTACK_URL,
  hCaptchaSecret: process.env.HCAPTCHA_SECRET_KEY,
  // MAIL STUFF
  mailHost: process.env.MAIL_HOST,
  mailPort: process.env.MAIL_PORT,
  mailUser: process.env.MAIL_USER,
  mailPassword: process.env.MAIL_PASSWORD,
  mailFrom: process.env.MAIL_FROM,
  mailTo: process.env.MAIL_TO
};
