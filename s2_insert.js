mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'mypassword',
    database: 'mydb'
})
connection.connect();

r={};
r.seq=1;
r.type='T';
r.device='102';
r.unit='0';
r.ip="192.168.0.2";
r.value=10.9;

var query = connection.query("insert into sensors (seq, type, device, unit, ip, value) values (1, 'T', 102, 0, '192.168.1.1', 10.9)", function(err, rows, cols) {
  if (err) throw err;
  console.log("done");
  process.exit();
});
