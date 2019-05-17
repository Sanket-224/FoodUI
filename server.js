const express = require('express')
const app = express()
var path = require('path');
var hostname = "0.0.0.0"

app.use('/index_files', express.static(__dirname + '/index_files'));
app.use('/second-page_files', express.static(__dirname + '/second-page_files'));
app.use('/third_files', express.static(__dirname + '/third_files'));
app.use('/resources', express.static(__dirname + '/resources'));

app.get('/first', function (req, res) {
  res.sendFile(__dirname + '/index.htm');
})

app.get('/second-page', function (req, res) {
  res.sendFile(__dirname + '/second-page.htm');
})

app.get('/third', function (req, res) {
  res.sendFile(__dirname + '/third.html');
})

app.listen(3000, hostname, function () {
  console.log('Example app listening on port 3000!')
})