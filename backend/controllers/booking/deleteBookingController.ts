import { Request, Response } from "express";
import { BookingModel } from "../../models";

async function deleteBookingController(req: Request, res: Response) {
    const bookingId = parseInt(req.params.bookingId);

    try {
        await BookingModel.deleteBooking(bookingId);
        res.status(204).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        console.error('Error deleting booking:', error);
        res.status(500).json({ message: 'Failed to delete booking', error: 'Interel Server Error' });
    }
}

export { deleteBookingController };
