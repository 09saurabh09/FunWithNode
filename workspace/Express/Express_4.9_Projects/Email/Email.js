var nodemailer = require('nodemailer');

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
    }
});