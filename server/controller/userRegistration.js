const UserModel = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRegistrartion = async (req, res) => {
    const { email, password } = req.body

    const user = await UserModel.findOne({ email: email })
    if (user) {
        res.send({ "status": "failed", "message": "Email already exists" })
    } else {
        if (email && password) {
            try {
                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(password, salt);
                const newUser = new UserModel({
                    email: email,
                    password: hashPassword,
                })
                await newUser.save()
                const saved_user = await UserModel.findOne({ email: email })

                //Generate JWT Token
                const token = jwt.sign({ userID: saved_user._id },
                    process.env.JWT_SECRET_KEY,
                    { expiresIn: '5d' })

                res.status(201).send({ "message": "registration Succesful", "token": token });
            }
            catch (err) {
                res.send({ "status": "failed", "message": "Unable to register" });
            }
        } else {
            res.send({ "status": "failed", "message": "Please fill both the fields" })
        }
    }
}

module.exports=userRegistrartion;