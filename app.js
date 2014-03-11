
/**
 * Module dependencies.
 */

var express = require('express')
var http = require('http')
var path = require('path')
var db = require('monk')(process.env.DATABASE_ADDR + '/db')

var redis = require('redis')
var app = express()

// all environments
app.set('port', process.env.PORT || 3000)
app.set('views', __dirname + '/views')
app.set('view engine', 'hjs')
app.use(express.favicon())
app.use(express.logger('dev'))
app.use(express.bodyParser())
app.use(express.methodOverride())
app.use(app.router)
app.use(require('less-middleware')(__dirname + '/public'))
app.use(express.static(path.join(__dirname, 'public')))

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler())
}

app.get('/', function (req, res) {
  res.send('Bowery Connect Test App!!!!!!')
})

app.get('/test', function (req, res) {
  db.get('test').insert({hello: 'World'})
  res.send('hello World!')
})

app.get('/dump', function (req, res) {
  db.get('test').find()
  .success(function (data) {
    res.json({data: data})
  })
  .error(function (err) {
    console.log(err)
    res.json({error: err})
  })
})

app.get('/hello/:name', function (req, res) {
  res.send('Hello ' + req.params.name)
})

app.get('/env', function (req, res) {
  res.json(process.env)
})

app.get('/healthz', function (req, res) {
  res.send('ok')
})

app.listen(80)
