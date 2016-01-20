var Modem = require('gsm-modem');

var modem = new Modem({
  ports: ['/dev/ttyUSB0', '/dev/ttyUSB1', '/dev/ttyUSB2']
});

modem.connect(function(err) {
  if (err) {
    console.error('Error connecting modem: ', err);
    return;
  }

  console.log('Modem started !!');
});

module.exports = modem;
