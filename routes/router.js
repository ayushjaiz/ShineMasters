const express = require('express');
const route = express.Router();

const services = require('../services/render')

const userRegistrartion = require('../controller/userRegistration')
const userLogin = require('../controller/userLogin')
const workerRegistrartion = require('../controller/workerRegistration')
const userLogout = require('../controller/userLogout')

route.get('/', (req, res) => { res.render('main') })

//User login and registration
route.get('/userregistration', (req, res) => { res.render('user_registration') })
route.get('/userlogin', (req, res) => { res.render('user_login') })
route.get('/userdashboard', (req, res) => { res.render('user_dashboard') })
route.get('/userlogout', userLogout);
//worker registration
route.get('/workerregistration', (req, res) => { res.render('worker_registration') })

route.post('/userregistration', userRegistrartion)
route.post('/userlogin', userLogin)

route.post('/workerregistration', workerRegistrartion)


// route.put('/api/users/:id',controller.update);
// route.delete('/api/users/:id',controller.delete);

module.exports = route;