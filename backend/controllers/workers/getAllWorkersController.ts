import { Request, Response } from "express";
import { Worker, WorkerModel } from "../../models";

const getAllWorkers = async function (req: Request, res: Response) {
    try {
        const workers: Worker[] = await WorkerModel.getAllWorkers();

        res.send(workers) ;
    }
    catch (error) {
        console.error('Error retrieving worker:', error);
        res.status(500).json({ status: "error retrieving workers", message: 'Internel server error' });
    }

}

export default getAllWorkers;
