var config = require('./settings.json');
var http = require('http');
var request = require('request');

var server = http.createServer(function (req, resp) {
    var x = request({strictSSL: false, url:config.remote + req.url})
    req.pipe(x)
    if(resp && resp.body) fixlinks(resp.body);
    x.pipe(resp);
});

function fixlinks(body) => { body.replace("https://","http://")}


server.listen(config.port, function(){
    console.log("Proxy listening on: http://localhost:%s", config.port);
});
