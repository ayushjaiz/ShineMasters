const Worker = require('../model/workerModel');

const showCleaner = async (req, res) => {
    const { service } = req.params
    console.log(service);
    try {
        const workers = await Worker.find({ service: service });
        res.render('cleaner', { service: service, workers: workers });
    }
    catch (err) {
        console.log(err);
    }
}
module.exports = showCleaner;
