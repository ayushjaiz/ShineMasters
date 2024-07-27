import React, { createContext, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import SignUpPage from "./pages/SignUpPage";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./pages/ProtectedRoute";
import BrowsePage from "./pages/browse/BrowsePage";
// import { Provider } from "react-redux";

import { Provider } from "react-redux"; 
import { PersistGate } from "redux-persist/integration/react";
import { appStore, persistor } from "./store/appStore";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import CategoryPage from "./pages/category/CategoryPage";
import { DetailsPage } from "./pages/details/DetailsPage";
import BookingPage from "./pages/myBooking/BookingPage";

// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./store/appStore";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
      <Toaster />
    </>
  );
};

const App = () => {
  return (
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<AppLayout />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<SignUpPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/services" element={<BrowsePage />} />
            <Route path="/services/:type" element={<CategoryPage />} />
            <Route path="/worker/:id" element={<DetailsPage />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/bookings" element={<BookingPage />} />
            {/* <Route element={<ProtectedRoute />}>
              <Route path="/browse" element={<BrowsePage />} />
            </Route> */}
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
