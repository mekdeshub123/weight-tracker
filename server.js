var express = require('express')
var bodyParser = require('body-parser')
var Sequelize = require('sequelize')
var api_routes = require('./routes/api.js')
//var routes = require('./routes/routes.js')
var path = require('path')

//database configuration
sequelize = new Sequelize ({
    dialect: 'sqlite',
    storage: './db.sqlite3'
})
//verify connection
sequelize.authenticate()
.then(() => console.log('connected to sqlite'))
.catch(err => console.log('error connecting', err))
//var path = require('path')

//initialize recored model
let record = require('./model/record.js')(sequelize, Sequelize)
//app configuration
var app = express()
app.use(bodyParser.json())

//serve static files from dist directory
app.use(express.static(path.join(__dirname, 'weight-vue', 'dist')))

app.use('/api', api_routes(record))

//Error handler-for rout that is not found
app.use(function(req, res, next) {
    res.status(404).send('Not found')
}),
// error handler for server errors
app.use(function (err, req, res, next) {
    console.error(err, stack)
    res.status(500).send('Server error')
})



//app.use('/api', routes)
//start surver running
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port)
})