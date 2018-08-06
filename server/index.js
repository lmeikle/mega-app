const express = require('express');
const url = require('url');
const request = require('request');

const app = express();

/**
 * Proxy api calls through here to avoid CORS issues locally
 */
app.get('/banking/api', function(req, res) {
  let url_parts = url.parse(req.url, true);
  let query = url_parts.query;
  request(query.url)
    .on('error', function(e) {
      res.status(404).send(new Error());
    })
    .pipe(res);
});

app.post('/misc/ajaxtest', function(req, res) {
  res.send('ajax test succeeded');
});

app.use(require('./filters/filterProxy'));

app.listen(3001);
