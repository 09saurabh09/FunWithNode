//var EventEmitter = require('events').EventEmitter;
var Events = require("events");
var sql = require("mssql");

var getResource = function(c) {
    var e = new Events.EventEmitter();
    process.nextTick(function() {
        var count = 0;
        e.emit('start');
        var t = setInterval(function () {
            e.emit('data', ++count);
            if (count === c) {
                e.emit('end', count);
                clearInterval(t);
            }
        }, 10);
    });
    return(e);
};

var even = function(n){
    var ev =new Events.EventEmitter();
    var t = setInterval(function ()
        {
            if(n===0)
                {   
                    clearInterval(t);
                    
                }
            else if (n%2===0)
            {
                ev.emit('even',n);
                
            }
            else if(n%2===1)
                {
                    ev.emit('odd');
                    
                }
            n= n-1;    
        },10);
    return(ev);
};

var r = getResource(5);

r.on('start', function() {
    console.log("I've started!");
});

r.on('data', function(d) {
    console.log("   I received data -> " + d);
});

r.on('end', function(t) {
    console.log("I'm done, with " + t + " data events.");
});


var check = even(10);

check.on('even',function(d){
    console.log("Even Number: "+d);
});

var config = {
	    user: 'saurabh',
	    password: 'P@ssw0rd',
	    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
	    port: '49172',
	    database: 'tempdb',
	    stream: true, // You can enable streaming globally

	    options: {
	        encrypt: true // Use this if you're on Windows Azure
	    }
	}
    
	sql.connect(config, function(err) {
	    // ... error checks
        if(err){
        	console.log("Not Connected");
        	console.log(err.message);
        }
        
        console.log("Connected");
});