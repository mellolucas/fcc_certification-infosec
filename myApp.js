const express = require('express');
const app = express();


// ------------- Challenges ------------------------

// Challenge 1: Install and require 'helmet'

let helmet = require('helmet');

// Challenge 2: Hide 'powered by' info with with helmet.hidePoweredBy() method

app.use(helmet.hidePoweredBy());

// Challenge 3: Mitigate clickhighjacking risk with helmet.frameguard() method

app.use(helmet.frameguard({action: 'deny'}));

// Challenge 4: Mitigate XSS with helmet.xssFilter() method to set filter to 1

app.use(helmet.xssFilter());































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
