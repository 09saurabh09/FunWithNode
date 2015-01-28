var fs = require('fs');

var http = require('http');


http.createServer(function(req, res) {
   res.writeHead(200,{'content-type':'text/plain'});
   if(req.url==='/file.txt')
   {
     fs.createReadStream(__dirname +'/file.txt').pipe(res);
   }
   
   else
   {
     res.end("Hello, Welcome to My Server")
   }
}).listen(process.env.PORT, process.env.IP);