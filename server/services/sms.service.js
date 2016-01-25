/**
 * author nhuan
 */

/* init module */
var url = 'http://localhost:6969';
var request = require('request');


/**
 * services
 */

/* send message */
var sendMessage = function(content, phone) {
  request
    .post(url)
    .form({
      content: content,
      phone: phone
    });
};


/* export services */
module.exports = {
  sendMessage: sendMessage
};