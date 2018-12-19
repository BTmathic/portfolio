require('dotenv').config({ path: '.env.development' });

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS
  }
});

app.use(express.static(publicPath));
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contact', (req, res) => {
  const mail = {
    from: req.body.email,
    replyTo: req.body.email,
    to: 'mathic@gmail.com',
    subject: 'Message from ' + req.body.name + ' at ' + req.body.email,
    text: req.body.message
  };
  transporter.sendMail(mail, (err) => {
    if (err) {
      console.log('Error sending mail: ', err);
    } else {
      console.log('Success, mail sent!');
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});