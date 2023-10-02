const express = require('express');
const route = express.Router();

const userRegisteration = require('../controller/userRegisteration')
const userLogin = require('../controller/userLogin')
const workerRegisteration = require('../controller/workerRegisteration')
const userLogout = require('../controller/userLogout')
const showWorker = require('../controller/showWorker')
const bookWorker = require('../controller/bookWorker')
const myBookedWorker = require('../controller/myBookedWorkers');
const { requireAuth } = require('../middleware/auth');

route.get('/', (req, res) => { res.render('main') })

//user login and registeration
route.get('/userregisteration', (req, res) => { res.render('user_registeration') })
route.get('/userlogin', (req, res) => { res.render('user_login') })
// route.get('/userdashboard', (req, res) => { res.render('user_dashboard') })
route.get('/userdashboard', myBookedWorker)
route.get('/userlogout', userLogout);

//workers
route.get('/workerregisteration', (req, res) => { res.render('worker_registeration') })
route.get('/worker', requireAuth, showWorker);
route.get('/book', bookWorker);

route.post('/userregisteration', userRegisteration)
route.post('/userlogin', userLogin)
route.post('/workerregisteration', workerRegisteration)

// route.delete('/api/users/:id',controller.delete);

module.exports = route;