var express = require('express')
var Sequelize = require('sequelize')

module.exports = function(Record) {
    var router = express.Router()

    router.get('/records', function(req, res, next) {
        Record.findAll( {order: ['date']} ).then( records => {
            return res.json(records)
        }).catch(err => next(err))
    })
    router.post('/records', function(req, res, next) {
        Record.create(req.body).then( (data) => {
            return res.status(201).send('ok')
        }).catch( err => {
            if(err instanceof Sequelize.ValidationError) {
                let messages = err.errors.map( (e) => e.message)
                return res.status(500).json(messages)
            }
            return next(err)
        })
    })
    router.patch('/records/:date', function(req, res, next) {
        Record.update(
            req.body, {where: { date: req.params.date}})
        .then( (rowModified) => {
            return res.send('ok')
        })
    })
    router.delete('/records/:date', function(req, res, next) {
        Record.destroy( { where: { date: req.params.date}} ).then( () => {
            return res.send('ok')
        }).catch( err => next(err) )
    })
    
    return router
}