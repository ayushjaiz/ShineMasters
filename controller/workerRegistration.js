const WorkerModel = require('../model/workerModel');

const workerRegistration = async (req, res) => {
    const { name, number, email, service } = req.body

    const worker = await WorkerModel.findOne({ email: email })
    if (worker) {
        res.send({ "status": "failed", "message": "Email already exists" })
    } else {
        if (name && number && email && service) {
            try {
                const doc = new WorkerModel({
                    name: name,
                    number: number,
                    email: email,
                    service: service
                })
                await doc.save()
                res.status(201).send({ "status": "success", "message": "Worker Registration Success" })
            } catch (error) {
                console.log(error)
                res.send({ "status": "failed", "message": "Unable to Register Worker" })
            }

        } else {
            res.send({ "status": "failed", "message": "All fields are required" })
        }
    }
}

module.exports = workerRegistration;