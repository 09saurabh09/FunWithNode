var http = require("http");

var options = {
    host: 'http://www.google.com',
    port:80,
    path:'/',
    method:'GET'
};

var res = http.request('http://www.google.com',function(response){
    console.log(response.statusCode);
    response.pipe(process.stdout);
    
    response.on('error',function(){
        console.log("error");
    });
}); 

res.end();