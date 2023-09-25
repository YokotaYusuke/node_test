const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('top page')
})

app.get('/about', function (req, res) {
  res.send('about page')
})

app.listen(3000);