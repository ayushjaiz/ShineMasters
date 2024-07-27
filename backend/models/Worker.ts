import { PrismaClient } from "@prisma/client";
import getAllWorkers from "../controllers/workers/getAllWorkersController";

const prisma = new PrismaClient()

interface Worker {
    workerId?: number;
    userId: number;
    workerType?: string | null;
    experienceYears?: number | null;
    dailyRate?: number | null;
    availability?: boolean | null;
    location?: string | null;
    bio?: string | null;
    imageUrl?: string | null,
    createdAt?: Date;
    updatedAt?: Date;
}

interface updateWorkerParams {
    workerType?: string;
    experienceYears?: number;
    dailyRate?: number;
    availability?: Boolean;
    location?: string;
    bio?: string;
    imageUrl?: string,
}

class WorkerModel {
    static async createWorker(
        { userId,
            workerType,
            bio,
            availability,
            dailyRate,
            location,
            experienceYears,
            imageUrl,
        }: Worker
    ): Promise<Worker> {

        try {
            await prisma.user.update({
                where: { userId },
                data: { isWorker: true },
            });

            const data: any = {
                userId,
                workerType,
            };

            if (experienceYears !== undefined) {
                data.experienceYears = experienceYears;
            }

            if (dailyRate !== undefined) {
                data.dailyRate = dailyRate;
            }

            if (availability !== undefined) {
                data.availability = availability;
            }

            if (location !== undefined) {
                data.location = location;
            }

            if (bio !== undefined) {
                data.bio = bio;
            }

            if (imageUrl !== undefined) {
                data.imageUrl = imageUrl;
            }

            const createdWorker = await prisma.worker.create({
                data: data
            });

            return createdWorker;
        } catch (error: any) {
            throw new Error('Failed to create worker: ' + error.message);
        }
    }

    static async updateWorker(
        workerId: number,
        {
            workerType,
            bio,
            availability,
            dailyRate,
            location,
            experienceYears
        }: updateWorkerParams
    ): Promise<Worker> {
        try {

            const data: any = {};

            if (workerType !== undefined) {
                data.workerType = workerType;
            }

            if (experienceYears !== undefined) {
                data.experienceYears = experienceYears;
            }

            if (dailyRate !== undefined) {
                data.dailyRate = dailyRate;
            }

            if (availability !== undefined) {
                data.availability = availability;
            }

            if (location !== undefined) {
                data.location = location;
            }

            if (bio !== undefined) {
                data.bio = bio;
            }

            const updatedWorker = await prisma.worker.update({
                where: { workerId },
                data: data
            });

            return updatedWorker;
        } catch (error: any) {
            console.error(`Failed to update worker with ID ${workerId}: ${error.message}`);
            throw new Error('Failed to update worker');
        }
    }

    static async getAllWorkers(): Promise<Worker[]> {
        try {
            const workers = await prisma.worker.findMany({
                include: {
                    user: true, // Include related User data
                },
            });
            // console.log('hello from get worker model');
            // console.log(workers.length);

            return workers;
        } catch (error: any) {
            throw new Error(error);
        }

    }

    static async getWorkerDetails(workerId: number): Promise<Worker> {
        try {
            const worker = await prisma.worker.findUnique({
                where: { workerId },
                include: {
                    user: true, // Include related User data
                },
            });

            if (worker == null) {
                throw new Error(`No worker found with workerId ${workerId}`);
            }
            return worker;
        } catch (error: any) {
            throw new Error(error);
        }

    }
}

export { Worker, WorkerModel };
