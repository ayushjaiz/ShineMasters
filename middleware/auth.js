const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

    //check json web token exists and is verified
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                res.redirect('/userlogin');
            }
            else {
                console.log(decodedToken)
                next();
            }
        })
    }
    else {
        res.redirect('/userlogin');
    }
}

//check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decodedToken) => {
            if (err) {
                // console.log('1')
                res.locals.user = null;
                next()
            }
            else {
                let user = await User.findById(decodedToken.userID);
                res.locals.user = user;
                next();
            }
        })
    }
    else {
        res.locals.user = null;
        next();
    }
};

module.exports = { requireAuth, checkUser };