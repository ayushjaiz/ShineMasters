import { Request, Response } from "express";
import { Worker, WorkerModel } from "../../models";

const updateWorker = async function (req: Request, res: Response) {
    try {
        const {
            workerType,
            bio,
            availability,
            dailyRate,
            location,
            experienceYears,
        } = req.body;

        const workerId = req.params;

        const updatedWorker: Worker = await WorkerModel.updateWorker(
            Number(workerId),
            {
                workerType,
                bio,
                availability,
                dailyRate,
                location,
                experienceYears,

            }
        )

        res.status(201).json({ status: "success", message: 'Worker updated successfully', updatedWorkerr: updatedWorker });
    } catch (error) {
        console.error('Error updating worker:', error);
        res.status(500).json({ status: "error updating worker", message: error });
    }
}

export default updateWorker;