const path = require('path');
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alex.home.mini@gmail.com',
    pass: 'ghome6139853731'
  }
});
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.post('/contact', (req, res) => {
  const mailOptions = {
    from: 'me@me.com',
    to: 'mathic@gmail.com',
    subject: 'Message from test',
    text: 'Test'
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    }
    console.log('Email sent: ' + info.response);
  })
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});