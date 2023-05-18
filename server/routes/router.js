const express = require('express');
const route = express.Router();

const services = require('../services/render')

const userRegistrartion = require('../controller/userRegistration')
const userLogin = require('../controller/userLogin')

route.get('/', (req, res) => {
    res.send('Hello world')
})
route.get('/userregistartion', (req, res) => {
    res.render('user_registration')
})

route.get('/userlogin', (req, res) => {
    res.render('user_login')
})
// route.put('/api/users/:id',controller.update);
// route.delete('/api/users/:id',controller.delete);


route.post('/userregistartion', userRegistrartion)
route.post('/userlogin', userLogin)

module.exports = route;