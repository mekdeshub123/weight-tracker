var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
    res.json({'message': 'fienal weight tracker'})
})


// TODO set up Sequelize model and connnect database to server code (but not in this file)


// TODO write a GET route that returns all of the weight records from the database 


// TODO write a POST route that adds one new weight record to the database 


module.exports = router