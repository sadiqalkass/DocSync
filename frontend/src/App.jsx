import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import Navbar from "./component/Navbar";
import Footer from "./pages/Footer";
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/doctors/:speciality" element={<Doctors/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/my-profile" element={<MyProfile/>}/>
        <Route path="/my-appointments" element={<MyAppointments/>}/>
        <Route path="/appointment/:docId" element={<Appointment/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
