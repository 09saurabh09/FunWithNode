var request = require('request');
var https = require("https");
var http = require("http");

function stockPrice(comp,low, current, high) {
    this.comp = comp;
    this.price = {};
    this.price['low']=low;
    this.price['current']=current;
    this.price['high']=high;
   
}

var prices = [];
var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%'+
          '20yahoo.finance.quotes%20where%20symbol%20in%20%28%22goog%2Cmsft'+
          '%2Cfb%2CAAPL%2CADBE%2CAMZN%2CBIDU%2CCSCO%2CEBAY%2CFOXA%2CINTC%2CNFLX'+
          '%2CNTAP%2CNVDA%2CQCOM%2CSBUX%2CTXN%2CYHOO%2CVOD%2CATVI%2CDTV %22%29&'+
          'format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2'+
          'Falltableswithkeys&callback='
//var stockData = request(url);
var comp1 = new stockPrice('goog',12,13,14);
prices.push(comp1);
var comp2 = new stockPrice('goog',142,313,214);
prices.push(comp2);

console.log(prices);
console.log(prices[0].price.low);

var urlStock = 'http://finance.google.com/finance/info?client=ig&q=NASDAQ%3aMSFT'+
               ',fb,aapl,adbe,amzn,bidu,csco,ebay,foxa,goog,intc,msft,nflx,ntap'+
               ',nvda,qcom,sbux,txn,yhoo,vod,atvi';
/*
var res = https.request(url,function(response){
    console.log(response.statusCode);
    //response.pipe(process.stdout);
    //console.log(response);
    
    response.on('error',function(){
        console.log("error");
    });
    
}); 


res.end();

*/
setInterval(function(){getCompQuotes()},5000);

function getCompQuotes(){
    request(urlStock, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        //var stockResponse = JSON.parse(body);
        var data = JSON.parse(body.substring(3,body.length));
           console.log(data[0]);
           /* var nStocks = stockResponse.query.results.quote.length;
            //console.log(stockResponse.query.results.quote.length);
            for(var i = 0; i < nStocks; i++){
                var quotes = stockResponse.query.results.quote[i];
                var compPrice = new stockPrice(quotes.symbol,quotes.DaysLow,quotes.AskRealtime,quotes.DaysHigh);
                prices.push(compPrice);
               
            }
            */
            //console.log(stockResponse);
      }
      else if(error){
          console.log(error);
      }
    });
}

