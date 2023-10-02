const Worker = require('../model/workerModel');
const User = require('../model/userModel')

const bookCleaner = async (req, res) => {
    const { id, user } = req.query
    try {
        const bookedWorker = await Worker.findByIdAndUpdate({ _id: id }, { avaliable: false });
        const result = await User.update({ _id: user }, { $push: { bookedWorkers: { $each: [id] } } })
        // res.send({ bookedWorker, result });
        res.redirect('/');
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = bookCleaner;