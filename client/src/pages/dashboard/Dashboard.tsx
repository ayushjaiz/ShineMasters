import React from "react";
import Header from "../../components/Header";
import ProfileSection from "./ProfileSection";
import BookingList from "./BookingList";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex w-[1200] min-h-screen space-x-16 my-10 mx-auto justify-center">
        <ProfileSection />
        <BookingList />
      </div>
    </>
  );
};

export default Dashboard;
