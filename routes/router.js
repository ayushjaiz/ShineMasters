const express = require('express');
const route = express.Router();

const userRegisteration = require('../controller/userRegisteration')
const userLogin = require('../controller/userLogin')
const workerRegisteration = require('../controller/workerRegisteration')
const userLogout = require('../controller/userLogout')

route.get('/', (req, res) => { res.render('main') })

//User login and registeration
route.get('/userregisteration', (req, res) => { res.render('user_registeration') })
route.get('/userlogin', (req, res) => { res.render('user_login') })
route.get('/userdashboard', (req, res) => { res.render('user_dashboard') })
route.get('/userlogout', userLogout);
//worker registeration
route.get('/workerregisteration', (req, res) => { res.render('worker_registeration') })

route.post('/userregisteration', userRegisteration)
route.post('/userlogin', userLogin)
route.post('/workeregisteration', workerRegisteration)

route.post('/workerregisteration', workerRegisteration)

route.get('/cleaner', (req, res) => { res.render('cleaner') })


// route.put('/api/users/:id',controller.update);
// route.delete('/api/users/:id',controller.delete);

module.exports = route;