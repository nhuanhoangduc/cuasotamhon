/*
 * @author hoang duc nhuan
 */


/* init variables */
var modem = require('../configs/modem');


/*
 * services
 */

/* send a message to a phone number */
var sendMessage = function(content, phone, callback) {
  var message = {
    text: content,
    receiver: phone,
    encoding: '16bit'
  };

  modem.sms(message, function(err) {
    callback(err);
  });
};


/* export services */
module.exports = {
  sendMessage: sendMessage
}
