/*
 * 2017/12/19 Kyuho Kim
 * GET으로 호출하는 경우.
 * http://localhost:8080/graph
 */
var express = require('express')
var app = express()
fs = require('fs');
mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'sensor',
    password: 'mypassword',
    database: 'data'
})
connection.connect();


app.get('/graph', function (req, res) {
    console.log('got app.get(graph)');
    var html = fs.readFile('./graph1.html', function (err, html) {
    html = " "+ html
    console.log('read file');

    var qstr = 'select * from sensors ';
    connection.query(qstr, function(err, rows, cols) {
      if (err) throw err;

      var data = "";
      var comma = ""
      for (var i=0; i< rows.length; i++) {
         r = rows[i];
         data += comma + "[new Date(2017,04-1,"+ r.id +",00,38),"+ r.value +"]";
         comma = ",";
      }
      var header = "data.addColumn('date', 'Date/Time');"
      header += "data.addColumn('number', 'Temp');"
      html = html.replace("<%HEADER%>", header);
      html = html.replace("<%DATA%>", data);

      res.writeHeader(200, {"Content-Type": "text/html"});
      res.write(html);
      res.end();
    });
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
