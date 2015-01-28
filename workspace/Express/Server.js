var express = require("express"),
    fs      = require("fs");

var app = express();
app.use(express.urlencoded());

app.get('/', function(req,res){
    res.send('Hello From Express!!!');
    
    /*
    fs.readFile('/views/index.ejs', function(error,html){
        if(error){
            throw error;
        }
        res.writeHeade(200, {"Content-Type":"text/html"});
        res.write(html);
        res.end();
    });
    */
});

app.post('/dostuff', function(req,res){
    var param = req.param('foo');
    
    res.send({foo:param});
});

app.listen(process.env.PORT);