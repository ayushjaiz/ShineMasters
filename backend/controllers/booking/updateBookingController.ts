import { Request, Response } from "express";
import { BookingModel } from "../../models";
import { AuthenticatedRequest } from "../../middleware";

const updateBooking = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const { bookingId, workerId } = req.params;
        const { startDate, duration } = req.body;
        const userId = req.user.userId;

        const updatedBooking = await BookingModel.updateBooking(
            userId,
            Number(workerId),
            { startDate, duration }
        );

        res.status(200).json({ status: "success", message: "Booking updated successfully", booking: updatedBooking });
    } catch (error) {
        console.error("Error updating booking:", error);
        res.status(500).json({ status: "failed", message: error });
    }
};

export default updateBooking;
