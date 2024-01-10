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
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import logo from "../assest/kgs.png";
import "react-toastify/dist/ReactToastify.css";
import AuthButtons from "./AuthButtons";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logout successful");
    window.location.reload();
  };

  return (
    <>
    <Box   h="80px">
      <Flex
        as="nav"
        align="center"
        width= "100%"
        position = "fixed"
        zIndex={10}
        bg={colorMode === "light" ? "white" : "gray.800"}
        justify="space-between"
        p={{base:4 ,lg:2}}
        fontFamily="serif"
        boxShadow="lg"
   
      >
        <Box display="flex" ml={{ base: 0, md: "30px" }}>
          <Link to="/">
            <Image
              src={logo}
              alt="My Logo"
              ml={{ base: "15px", md: "45px" }}
              h={{ base: "50px", md: "70px" }}
              w="80%"
            />
          </Link>
        </Box>

        <Heading
           fontSize={{ base: "sm", md: "md" , lg:"xl" }}
          textAlign={{ base: "center", md: "left" }}
           mb={{ base: 4, md: 0 }}
        >
          Welcome to The Khan Global Studies Website!
        </Heading>

       

        {isLargerThan1024 ? (
          <>
            <Box>
              <AuthButtons isLoggedIn={isLoggedIn} onLogout={handleLogout} />
              {token ? null : (
                <Link to="/signup">
                  <Button colorScheme="blue" size="lg" ml={{ base: 0, md: 4 }}>
                    Signup
                  </Button>
                </Link>
              )}
            </Box>
            
            <Button onClick={toggleColorMode} size="lg" ml={{ base: 0, md: 4 }}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </>
        ) : null}

   <Box>
          <IconButton
            aria-label="Toggle navigation"
            icon={<HamburgerIcon />}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            display={{ base: "block", lg :"none" }}
          />
        </Box>


      </Flex>

   
     
      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={() => setIsDrawerOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
  
              <Link to="/">Home</Link>
              <Box>
              <AuthButtons isLoggedIn={isLoggedIn} onLogout={handleLogout} />
              {token ? null : (
                <Link to="/signup">
                  <Button colorScheme="blue" size="lg" ml={{ base: 0, md: 4 }}>
                    Signup
                  </Button>
                </Link>
              )}
            </Box>
              <Button onClick={toggleColorMode} size="lg" ml={{ base: 0, md: 4 }}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
</Box>
      <ToastContainer position="top-right" />
    </>
  );
};

export default Navbar;
