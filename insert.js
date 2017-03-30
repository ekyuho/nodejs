mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'sensor',
    password: 'mypassword',
    database: 'data'
})
connection.connect();

r={};
r.seq=1;
r.type='T';
r.device='102';
r.unit='0';
r.ip="192.168.0.2";
r.value=10.9;

var query = connection.query('insert into sensors set ?', r, function(err, rows, cols) {
  if (err) throw err;
  console.log("done");
  process.exit();
});
