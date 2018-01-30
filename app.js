var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const multer = require('multer');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');


mongoose.connect('mongodb://mountains:Mountains@ds119028.mlab.com:19028/mountains');
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('We are connected');
});

let Article = require('./models/article')

var index = require('./routes/index');

const storage = multer.diskStorage({
  destination: './public/assets/images/person-card/',
  filename: (req, file, cb)=>{
    cb(null, '155312-600.jpg');
  }
});

const avatarUpload = multer({
  storage: storage
}).single('myImage');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use('/adminvue', (req, res)=>{
  res.sendFile(path.resolve(__dirname, './public', 'adminvue.html'));
});


// multer change avatar
app.post('/avatar', (req, res) =>{
  avatarUpload(req, res, (err)=>{
    if (err){
      res.render('./pages/node-msg', {msg:err});
    } else {
      res.render('./pages/node-msg', {msg:'Аватар загружен'});
    }
  });
});

// Add article with mongoose
app.post('/article', (req,res)=>{
  let article = new Article();
  article.title = req.body.title;
  article.date = req.body.date;
  article.body = req.body.body;

  article.save((err)=>{
    if (err){
      console.log(err);
      return;
    } else {
      res.render('./pages/node-msg', {msg:'Статья добавлена в базу'});
    };
  });
});


// my-works form send with nodemailer
app.post('/send', (req, res)=>{
  const output = `
    <p>Новое сообщение с сайта "Mountains"</p>
    <h3>Содержание</h3>
    <ul>
      <li>Имя: ${req.body.name}</li>
      <li>Электронная почта: ${req.body.email}</li>
      <li>Сообщение: ${req.body.message}</li>
    </ul>
  `

  let transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'lsphp@mail.ru', // generated ethereal user
        pass: 'qwe123qwe123'  // generated ethereal password
    }
  });

  let mailOptions = {
    from: '"Nodetest" <lsphp@mail.ru>', // sender address
    to: 'q05t9n@mail.ru', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.render('./pages/node-msg', {msg:'Сообщение отправлено'});

  });


});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
