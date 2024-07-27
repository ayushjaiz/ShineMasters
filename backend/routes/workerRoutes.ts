import { Router } from "express";
import { checkUserAuth, singleUpload } from "../middleware";
import {
    getAllWorkersController,
    getWorkerDetailsController,
    registerWorkerController,
    updateWorkerController
} from "../controllers";

const router = Router();

// Public routes
router.get('/', getAllWorkersController);
router.get('/:workerId', getWorkerDetailsController);

// Protected routes
router.post('/register', checkUserAuth, singleUpload, registerWorkerController);
router.put('/:workerId', checkUserAuth, singleUpload, updateWorkerController);

export default router;