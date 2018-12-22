var express = require('express')
var fs = require('fs')
var app = express()
var mockData = require('./mockData.json')
let users = { admin: { password: 'admin' } }

app.use(express.json())
app.use(express.static('./build/'))
app.use(express.urlencoded())

app.get('/getData', function(req, res) {
  res.status(200).send({ error: null, message: 'success', data: mockData })
})
  
var server = app.listen(4001, function() {
  console.log('Server running at http://localhost:' + server.address().port)
})
