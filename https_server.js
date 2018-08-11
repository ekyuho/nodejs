/* 
 * https server
 * Kyuho Kim (ekyuho@gmail.com)
 *
 * Create Self-Signed Certificate https://geekflare.com/openssl-commands-certificates/ 
 * openssl req -x509 -sha256 -nodes -newkey rsa:2048 -keyout gfselfsigned.key -out gfcert.pem
 *
 */


var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');

var options = {
    cert: fs.readFileSync("gfcert.pem"),
    key: fs.readFileSync("gfselfsigned.key")
};

app = express()
apps = express()

app.get('/', function(req,res) {
    console.log("http got %j", req.query)
    res.send('hello http '+ JSON.stringify(req.query));
});

apps.get('/', function(req,res) {
    console.log("https got %j", req.query)
    res.send('hello https '+ JSON.stringify(req.query));
});

http.createServer(app).listen(8000, function(){
    console.log("http server http://IP_ADDRESS:8000/")
});

https.createServer(options, apps).listen(8001, function(){
    console.log("secure server https://IP_ADDRESS:8001/")
});
