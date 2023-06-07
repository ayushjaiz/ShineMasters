require('dotenv').config();
const express = require('express');
const app = express();
const bodyparser = require("body-parser")
const path = require('path')
const cookieParser = require('cookie-parser');
const { checkUser } = require('./middleware/auth')
const port = process.env.PORT || 3000;
const dbConnect = require('./database/conn')

//database coonection
dbConnect(process.env.MONGODB_URL)
    .then((result) => { app.listen(port); console.log(`server ruunning at port ${port} and database connected`) })
    .catch((err) => console.log(err));

//parse request to body parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs")
app.use(cookieParser());
// app.set("views", path.resolve(__dirname, "views/ejs"));

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//setting routes
app.get('*', checkUser);
app.use('/', require('./routes/router'))