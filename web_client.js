/*
 * 2016/11/20 Kyuho Kim
 * GET으로 호출하는 경우.
 * http://localhost:8080/logone?user=202&serial=6&format=2&items=0-T-22.65,2-D-45.32,0-C-452
 * 
 * POST의 경우,  
 * http://localhost:8080/logone?user=202&serial=6&format=2 와 함께 
 * header는
 * 'Content-Type: application/x-www-form-urlencoded\r\n' 
 * body는 
 * items=0-T-22.65,2-D-45.32,0-C-452
*/
var http = require('http');

//var WHAT = 'GET';
var WHAT = 'POST';

///////////////////////////////////////////////////////////////
//GET Request
var get_options = {
  host: 'localhost',
  port: 8080,
  path: '/logone?user=202&serial=6&format=2&items=0-T-22.65,2-D-45.32,0-C-452'
};

callback = function(response) {
  var ack = '';
  response.on('data', function (chunk) { ack += chunk; });
  response.on('end', function () { console.log(ack); });
}



///////////////////////////////////////////////////////////////
//POST Request
var post_data = 'user=202&serial=6&format=2&items=0-T-22.65,2-D-45.32,0-C-452';
var post_options = {
  host: 'localhost',
  port: 8080,
  path: '/logone',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(post_data)
  }
};

var post_req = http.request(post_options, function(response) {
  var ack = '';
  response.setEncoding('utf8');
  response.on('data', function (chunk) { ack += chunk; });
  response.on('end', function () { console.log(ack); });
});

if (WHAT == 'GET')
  http.request(get_options, callback).end();
else if (WHAT == 'POST') {
  post_req.write(post_data);
  post_req.end();
} else
  console.log("Eh?? done nothing.  "+ WHAT);
