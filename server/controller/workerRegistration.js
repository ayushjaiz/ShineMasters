const workerModel = require('../model/workerModel');

//create a new user
const registerWorker = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty" });
        return;
    }

    //new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        service: req.body.service,
    })

    //save user in database
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/add-user')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating"
            })
        })
}

module.exports = registerWorker;