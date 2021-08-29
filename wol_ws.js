// lightweight web service, for sending wake-on-lan (WOL) messages

// setup
const express = require('express');
const app = express();
const http_server = require('http').Server(app);
const wol = require('wake_on_lan');
const config = require('./config.json')

app.get('/', (req, res) => {
    wol.wake(config.address);
    console.log(`sent magic packet for ${config.address}`);
    res.end('Success');
});

http_server.listen(config.port, () => {
    console.log(`listening on *:${config.port}`);
});
