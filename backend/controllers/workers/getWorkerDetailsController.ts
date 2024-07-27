import { Request, Response } from "express";
import { Worker, WorkerModel } from "../../models";

const getWorkerDetails = async function (req: Request, res: Response) {
    try {
        const workerId = parseInt(req.params.workerId, 10);

        if (isNaN(workerId)) {
            return res.status(400).json({ error: 'Invalid workerId' });
        }

        const worker = await WorkerModel.getWorkerDetails(workerId);

        if (!worker) {
            return res.status(404).json({ error: 'Worker not found' });
        }
        res.send(worker);
    }
    catch (error) {
        console.error('Error retrieving workers:', error);
        res.status(500).json({ status: "error retrieving workers", message: 'Internel server error' });
    }
}

export default getWorkerDetails;