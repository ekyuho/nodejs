var express = require('express')
var app = express()
fs = require('fs');

app.get('/graph', function (req, res) {
  console.log('got app.get(graph)');
  const html=fs.readFile('./graph.html', function (err, html) {
    console.log('read file');
    res.writeHeader(200, {"Content-Type": "text/html"});
    res.write(html);
    res.end();
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
