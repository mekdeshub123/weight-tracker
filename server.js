var express = require('express')
var bodyParser = require('body-parser')
var Sequelize = require('sequelize')
var api_routes = require('./routes/routes.js')
//var routes = require('./routes/routes.js')

//database configuration
Sequelize = new Sequelize ({
    dialect: 'sqlite',
    storage: './db.sqlite3'
})
//verify connection
Sequelize.authenticate()
.then(() => console.log('connected to sqlite'))
.catch(err => console.log('error connecting', err))
//var path = require('path')

//initialize recored model
let student = require('./model/record.js')(sequelize, Sequelize)
//app configuration
var app = express()
app.use(bodyParser.json())

app.use('/api', api_routes(record))

app.use(express.static(path.join(__dirname, 'weight-vue', 'dist')))

app.use('/api', routes)
//start surver running
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port)
})