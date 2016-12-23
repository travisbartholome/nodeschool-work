const net = require('net');

function zeroPadTwoDigit(num) {
  return (num < 10) ? '0' + num : '' + num;
}

function listener(socket) {
  let date = new Date();

  let year = date.getFullYear(),
  month = date.getMonth() + 1, // Months are 0-based by default.
  day = date.getDate(),
  hour = date.getHours(),
  minute = date.getMinutes();

  let timeString = '' + year + '-';
  timeString += zeroPadTwoDigit(month) + '-';
  timeString += zeroPadTwoDigit(day) + ' ';
  timeString += zeroPadTwoDigit(hour) + ':';
  timeString += zeroPadTwoDigit(minute);

  socket.write(timeString + '\n');
  socket.end();
}

var server = net.createServer(listener);
server.listen(process.argv[2]); // Server port. Evidently strings work here.
