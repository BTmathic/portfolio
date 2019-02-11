require('dotenv').config({ path: '.env.development' });

const express = require('express');
const bodyParser = require('body-parser');
const Bundler = require('parcel-bundler');
const cors = require('cors');
const helmet = require('helmet');
const nodemailer = require('nodemailer');
const path = require('path');
const ninetyDaysInMilliseconds = 90 * 24 * 60 * 60 * 1000;

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
const bundler = new Bundler(path.join(publicPath, 'index.html'));
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS
  }
});

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet({
  hidePoweredBy: {},
  framerguard: {
    action: 'deny'
  },
  xssFilter: {},
  noSniff: {},
  ieNoOpen: {},
  hsts: {
    maxAge: ninetyDaysInMilliseconds,
    force: true
  },
  dnsPrefetchControl: {},
  noCache: {},
  // contentSecurityPolicy: {
  //   directives: {
  //     defaultSrc: ["'self"],
  //     scriptSrc: ["'self"]
  //   }
  // }
}));

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
      res.status(500);
    } else {
      console.log('Success, mail sent!');
      res.status(200);
    }
  });
});

app.use(bundler.middleware());

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up on port', port);
});