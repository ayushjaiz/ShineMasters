import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Booking {
    bookingId?: number,
    userId: number,
    workerId: number,
    startDate: Date,
    duration: number,
    endDate?: Date
}

interface updateBookingParams {
    startDate?: Date,
    duration?: number,
};

class BookingModel {
    static async createBooking({ userId, workerId, startDate, duration }: Booking): Promise<Booking> {
        try {
            const bookingData: Booking = {
                userId,
                workerId,
                startDate,
                duration,
            };

            const createdBooking = await prisma.booking.create({
                data: bookingData,
            });

            return createdBooking;
        } catch (error: any) {
            throw new Error('Failed to create booking');
        }
    }

    static async updateBooking(userId: number, workerId: number, { startDate, duration }: updateBookingParams): Promise<Booking> {
        try {
            const updateBookingData: Partial<updateBookingParams> = {};
            if (startDate !== undefined) updateBookingData.startDate = startDate;
            if (duration !== undefined) updateBookingData.duration = duration;

            if (Object.keys(updateBookingData).length === 0) {
                throw new Error('No fields provbookingIded to update');
            }

            const updatedBooking = await prisma.booking.update({
                where: {
                    userId_workerId: {
                        userId,
                        workerId,
                    },
                },
                data: updateBookingData,
            });

            return updatedBooking;
        } catch (error: any) {
            if (error.code === 'P2025') {
                throw new Error('No booking found to update');
            }
            throw new Error('Failed to update booking: ' + error.message);
        }
    }

    static async deleteBooking(bookingId: number): Promise<void> {
        try {
            await prisma.booking.delete({
                where: {
                    bookingId: bookingId,
                },
            });
        } catch (error: any) {
            throw new Error('Failed to delete booking');
        }
    }
}

export { Booking, BookingModel };