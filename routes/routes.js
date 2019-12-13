var express = require('express')
var router = express.Router()

//a request to this route will get the Json response
router.get('/', function(req, res, next) {
    res.json({'message': 'I like weight tracker'})
})
module.exports = router