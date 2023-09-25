const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('top')
})

app.get('/about', function (req, res) {
  res.send('about')
})

app.listen(3000);