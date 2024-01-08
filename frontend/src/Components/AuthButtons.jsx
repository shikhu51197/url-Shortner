import React from "react";
import { Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AuthButtons = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logout successfull");
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      {token ? (
        <Button onClick={handleLogout} colorScheme="red" size="lg" mr={4}>
          Logout
        </Button>
       
      ) : (
        <Link to="/login">
          <Button colorScheme="pink" size="lg" mr={4}>
            Login
          </Button>
        </Link>
      )}
    </>
  );
};

export default AuthButtons;
