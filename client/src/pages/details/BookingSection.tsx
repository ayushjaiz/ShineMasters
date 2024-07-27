// import React, { ReactNode } from "react";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Calendar } from "@/components/ui/calendar";
// import DatePicker from "react-datepicker";
// import { DatePickerDemo } from "./StartDatePicker";

// interface BookingSectionProps {
//   children: ReactNode;
// }

// const BookingSection: React.FC<BookingSectionProps> = ({ children }) => {
//   const [startDate, setStartDate] = React.useState<Date | undefined>(new Date());
//   return (
//     <Sheet>
//       <SheetTrigger asChild>{children}</SheetTrigger>
//       <SheetContent className="w-[1000px]">
//         <SheetHeader>
//           <SheetTitle>Are you absolutely sure?</SheetTitle>
//           <SheetDescription>
//             <DatePickerDemo/>
//           </SheetDescription>
//         </SheetHeader>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default BookingSection;
