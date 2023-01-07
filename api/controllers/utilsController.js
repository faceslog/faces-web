const axios = require('axios');
const nodemailer = require('nodemailer');
const utils = require('../utils/utils');
const config = require('../utils/config');
const validation = require('../utils/validation');

exports.getBooks = async (req, res) => {
  try
  {
    const response = await axios.get(config.bookstackApi, {
      headers: {
        'Authorization': `Token ${config.bookstackKey}`
      }
    });

    let books = response.data.data;
    let data = [];

    books.forEach(book => {
      data.unshift(
        {
          date: utils.splitString(book.created_at, 'T')[0],
          title: book.name,
          description: utils.shortenString(book.description, 50) + " ...",
          link: config.bookstackUrl + book.slug
        }
      )
    });

    return res.status(200).json({ data });
  }
  catch (err)
  {
    console.error(err);
    return res.status(500).json({ message: "Couldn't Fetch Books ..."});
  }
};

exports.postContact = async (req, res) => {
  try
  {

    if(!validation.verifyEmail(req.body.email)) return res.status(400).json({ message: "Email Invalid !"});
    if(!validation.verifySubject(req.body.subject)) return res.status(400).json({ message: "Subject Invalid !"});
    if(!validation.verifyMessage(req.body.message)) return res.status(400).json({ message: "Message Invalid !"});
    if(!await validation.verifyCaptcha(req.body.captcha)) return res.status(400).json({ message: "Captcha Invalid !"});

    const transporter = nodemailer.createTransport({
      host: config.mailHost,
      port: config.mailPort,
      secure: false,
      auth: {
        user: config.mailUser,
        pass: config.mailPassword
      },
      tls: {
        requireTLS: true,
        rejectUnauthorized: false
      }
    });

    await transporter.sendMail({
      from: config.mailFrom,
      to: config.mailTo,
      subject: req.body.subject,
      text: req.body.message + `\nEmail of sender: ${req.body.email}`
    });
    console.log(`Mail from ${req.body.email} Successfully Sent !`);


    return res.status(200).json({ message: "Success"});
  }
  catch (err)
  {
    console.error(err);
    return res.status(500).json({ message: "Couldn't send mail ..."});
  }
};
