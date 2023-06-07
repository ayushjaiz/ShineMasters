const Worker = require('../model/workerModel');

const showWorker = async (req, res) => {
    const { service } = req.query
    console.log(service);
    try {
        const workers = await Worker.find({ service: service });
        console.log(workers);
        res.render('workers', { service: service, workers: workers });
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = showWorker;
