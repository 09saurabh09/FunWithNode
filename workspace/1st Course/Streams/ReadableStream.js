var request = require('request');

var s = request('http://www.facebook.com');

s.on('data',function(chunk){
    console.log(("data is:"+chunk))
});

s.on('end', function(){
    console.log("Done");
});
