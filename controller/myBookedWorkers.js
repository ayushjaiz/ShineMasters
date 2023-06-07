const Worker = require('../model/workerModel');
const User = require('../model/userModel')

const myBookedWorker = async (req, res) => {
    const { id } = req.query
    try {
        const my = await User.findById({ _id: id })
        const myBookedWorkers = await Worker.find({ '_id': { $in: my.bookedWorkers } });
        res.render('user_dashboard', { workers: myBookedWorkers })
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = myBookedWorker;