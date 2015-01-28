var request = require('request');
var fs = require("fs");

var s = request('http://www.facebook.com');

s.pipe(fs.createWriteStream('fb.html'));

var b = request('http://betawebapi.dowjones.com/fintech/data/api/v1/quotes/NOK');

b.pipe(fs.createWriteStream('dow.html'));

request('http://betawebapi.dowjones.com/fintech/data/api/v1/quotes/NOK', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(response); // Print the google web page.
  }
})