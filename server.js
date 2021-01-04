const express = require('express');
const server = express();
const port = 3000
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config.js');
const compiler = webpack(config);

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/templates/index.html'))
})

server.get('/example', (req, res) => {
  res.sendFile(path.join(__dirname + '/templates/example.html'))
})

server.use('/static',express.static(path.join(__dirname,'assets'),{
    maxAge: '1d',
}));

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})