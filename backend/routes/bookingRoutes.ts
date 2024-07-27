import express from 'express';
import { createBooking, updateBooking } from '../controllers';
import { checkUserAuth } from '../middleware';

const router = express.Router();

/* Protected Routes */

router.post('/', checkUserAuth, createBooking);
router.put('/:bookingId', checkUserAuth, updateBooking);

export default router;
