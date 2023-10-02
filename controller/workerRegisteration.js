const Worker = require('../model/workerModel');

const workerRegisteration = async (req, res) => {
    const { name, number, email, service } = req.body

    const worker = await Worker.findOne({ email: email })
    if (worker) {
        res.send({ "status": "failed", "message": "Email already exists" })
    } else {
        if (name && number && email && service) {
            try {
                const doc = new Worker({
                    name: name,
                    number: number,
                    email: email,
                    service: service
                })
                await doc.save()
                res.redirect('/');
                // res.status(201).send({ "status": "success", "message": "Worker RworkerRegisteration Success" })
            } catch (error) {
                console.log(error)
                res.send({ "status": "failed", "message": "Unable to Register Worker" })
            }

        } else {
            res.send({ "status": "failed", "message": "All fields are required" })
        }
    }
}

module.exports = workerRegisteration;