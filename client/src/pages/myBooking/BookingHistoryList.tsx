import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, User } from "lucide-react";
// import Image from "next/image";
import React from "react";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import GlobalApi from "@/app/_services/GlobalApi";
// import { toast } from "sonner";

const bookingHistory = [
1,2,3,4,5
];

const BookingHistoryList = () => {
  // const cancelAppointment = (booking) => {
  //   GlobalApi.deleteBooking(booking.id).then(
  //     (resp) => {
  //       if (resp) {
  //         toast("Booking Delete Successfully!");
  //       }
  //     },
  //     (e) => {
  //       toast("Error while canceling booking!");
  //     }
  //   );
  // };

  return (

    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {bookingHistory.map((booking, index) => (
        <div
          className="border 
          rounded-lg p-4 mb-5"
        >
          <div key={index} className="flex gap-4  ">
            {'Ayush' && (
              <img
                src={'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                alt="image"
                width={120}
                height={120}
                className="rounded-lg object-cover"
              />
            )}
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">{'Cleaner'}</h2>
              <h2 className="flex gap-2 text-primary">
                {" "}
                <User /> {'7705028722'}
              </h2>
              <h2 className="flex gap-2 text-gray-500">
                {" "}
                <MapPin className="text-primary" />{" "}
                {'1/496, kRISHNA nagar'}
              </h2>
              <h2 className="flex gap-2 text-gray-500">
                <Calendar className="text-primary" />
                Service on : <span className="text-black"> {'12-03-2022'}</span>
              </h2>
              <h2 className="flex gap-2 text-gray-500">
                <Clock className="text-primary" />
                Service on : <span className="text-black"> {'11:30'}</span>
              </h2>
            </div>
          </div>

          {/* <AlertDialog>
  <AlertDialogTrigger asChild>
  <Button
          variant="outline"
             className="mt-5 w-full border-red-300 ">Cancel Appointment</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction
      onClick={()=>cancelAppointment(booking)}
      >Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog> */}
        </div>
      ))}
    </div>
    </>
  );
};

export default BookingHistoryList;
