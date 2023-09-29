'use strict';
const https = require('https');
const express = require('express');
const { logger, readLog } = require('./utils/logger');
var fs = require('fs');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const worker = process.env.fromconsoleenvvar;
const address = 'http://';
const addressport = ':80';
const fulladdress = address + worker + addressport;
// App
const app = express();
app.get('/', (req, res) => {

  console.log(fulladdress);
  (async () => {
    const response = await fetch(fulladdress);
    const body = await response.text();
    console.log(body);
    res.send(body);
})();
  logger.info(`Request requested at`);
 // res.send(datagot);

});


app.listen(PORT, HOST, () => {
  console.log(`Running console on http://${HOST}:${PORT}`);
  logger.info(`Running logger on http://${HOST}:${PORT}`);
});
