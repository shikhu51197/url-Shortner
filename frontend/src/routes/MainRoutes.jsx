import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from ".././Components/Login";
import SignUp from ".././Components/Signup";
import Landing from ".././Components/Landing";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
