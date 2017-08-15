var express = require('express')
// var bodyParser = require('body-parser')

var app = express()

app.set('port', (process.env.PORT || 3000))
app.use(express.static('public'))
// app.use(bodyParser.json())

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})