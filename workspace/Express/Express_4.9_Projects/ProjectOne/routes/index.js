var express = require('express');
var router = express.Router();
var auth = require('http-auth');
var nodemailer = require('nodemailer');
var fs = require("fs");

var basic = auth.basic({
        realm: "Web."
    }, function (username, password, callback) { // Custom authentication method.
        callback(username === "userName" && password === "password");
    }
);

router.get('/good', auth.connect(basic), function(req,res){
   res.render('test', { title: 'Express' });
});

router.get('/go', auth.connect(basic), function(req,res){
    res.send("Great");
});


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/oh', function(req, res) {
  res.render('test', { title: 'Express' });
});








// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Misys ? <notjustanotherteamhackathon@gmail.com>', // sender address
    to: '09saurabh09@gmail.com', // list of receivers
    subject: 'Hello ?', // Subject line
    text: 'Hello world ?', // plaintext body
    html: '<b>Hello world ?</b>' // html body
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
        res.send()
    }
});
});


 

module.exports = router;
