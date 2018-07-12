const fs = require('fs');
const path = require('path');

const currentFilters = {};

var contentTypes = {
  json: 'application/json',
  html: 'text/html',
  xml: 'text/xml'
};

/**
 * Sends a dummy response
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {string} filePath - file path
 * @param {function} [modifyFunc] - optional function to modify the response in the file
 * @private
 */
function sendMessage(req, res, filePath, modifyFunc) {
  var fileExtension = filePath.split('.').pop();
  if (fileExtension && contentTypes[fileExtension]) {
    res.setHeader('Content-Type', contentTypes[fileExtension]);
  }

  var file = fs.readFileSync(path.join(__dirname, filePath));

  let msg;
  if (fileExtension === 'json') {
    msg = JSON.parse(file);
  } else if (fileExtension === 'html') {
    msg = file.toString();
  }

  if (modifyFunc) {
    msg = modifyFunc(req, msg);
  }

  res.send(msg);
}

module.exports = {
  sendMessage: sendMessage,
  currentFilters: currentFilters
};

require('./foods/filters');
