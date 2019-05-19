const express = require('express')
const app = express()
var path = require('path');
var hostname = "0.0.0.0"
var bodyParser = require('body-parser')
app.use(bodyParser.json())

var recipe = null;
var ingredients = [];

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

app.get('/alexa/:recipe', function(req, res) {
console.log(recipe);
recipe = req.params.recipe
console.log(recipe);
res.send("Done")
})

app.get('/get_saved_value', function(req, res) {
res.send(recipe);
})

app.post('/add_ingredients', function(req, res) {
console.log(req.body)
for(i in req.body) {
ingredients.push(req.body[i])
}
console.log(ingredients)
res.send("Done")
})

app.get('/get_ingredients', function(req, res) {
res.send(ingredients);
})


app.listen(3000, hostname, function () {
  console.log('Example app listening on port 3000!')
})
