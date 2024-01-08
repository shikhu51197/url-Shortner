import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Image,
  Flex,
  Link as ChakraLink,
  Button,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import logo from "../assest/kgs.png";
import "react-toastify/dist/ReactToastify.css";
import AuthButtons from "./AuthButtons";

import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const token = localStorage.getItem("token");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logout successfull");
    window.location.reload();
  };

  return (
    <>
      <Flex
        as="nav"
        align="center"
        bg="white.500"
        justify="space-between"
        p={2}
        fontFamily="serif"
        boxShadow="lg"
      >
        <Box display="flex" ml={"30px"}>
          <Link to="/">
            <Image src={logo} alt="My Logo" ml={"45px"} h="70px" w="80%" />
          </Link>
        </Box>
        <Heading fontSize="2xl">
          Welcome to The Khan Global Studies Website!
        </Heading>
        <Box>
          <AuthButtons isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          {token ? null : (
            <Link to="/signup">
              <Button colorScheme="blue" size="lg">
                Signup
              </Button>
            </Link>
          )}
        </Box>
        <Button onClick={toggleColorMode} size="lg" mr={4}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>{" "}
      </Flex>
      <ToastContainer position="top-right" />
    </>
  );
};

export default Navbar;
