// https://www.npmjs.com/package/serialport

var SerialPort = require('serialport');
var port = new SerialPort('COM4', {
    baudRate: 115200
});

port.on('open', function() {
  port.write('Starting..', function(err) {
    if (err) return console.log('Error on write: ', err.message);
  });
});

port.on('data', function (data) {
  console.log('data: ' + data.toString());
});

// open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message);
})
