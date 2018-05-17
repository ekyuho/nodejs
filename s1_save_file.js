const express = require('express')
const app = express()
fs = require("fs")

app.get('/', function(req, res) {
  res.send("ACK: "+ JSON.stringify(req.query));
  fs.appendFile("sensor.txt", JSON.stringify(req.query)+"\n", function(err) {
    if (err) throw err;
  });
  console.log("got new req %j", req.query);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
