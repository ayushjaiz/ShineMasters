const UserModel = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRegistration = async (req, res) => {
    console.log(req.body);
    const { name, number, email, password, address } = req.body
    const user = await UserModel.findOne({ email: email })
    if (user) {
        res.send({ "status": "failed", "message": "Email already exists" })
    } else {
        if (name && number && email && password && address) {
            try {
                const salt = await bcrypt.genSalt(10)
                const hashPassword = await bcrypt.hash(password, salt)
                const doc = new UserModel({
                    name: name,
                    number: number,
                    email: email,
                    password: hashPassword,
                    address: address
                })
                await doc.save()
                const saved_user = await UserModel.findOne({ email: email })
                // Generate JWT Token
                const token = jwt.sign({ userID: saved_user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
                res.status(201).send({ "status": "success", "message": "Registration Success", "token": token })
            } catch (error) {
                console.log(error)
                res.send({ "status": "failed", "message": "Unable to Register" })
            }

        } else {
            res.send({ "status": "failed", "message": "All fields are required" })
        }
    }
}

module.exports = userRegistration;