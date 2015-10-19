var config = require('config.json')('./settings.json');
var http = require('http');
var request = require('request');

var server = http.createServer(function (req, resp) {
    var x = request({strictSSL: false, url:config.remote + req.url})
    req.pipe(x)
    x.pipe(resp);
});


server.listen(config.port, function(){
    console.log("Proxy listening on: http://localhost:%s", config.port);
});