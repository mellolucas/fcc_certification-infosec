const express = require('express');
const app = express();


// ------------- Challenges ------------------------

// Challenge 1: Install and require 'helmet'

let helmet = require('helmet');

// Challenge 2: Hide 'powered by' info with with helmet.hidePoweredBy() method

app.use(helmet.hidePoweredBy());





































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
