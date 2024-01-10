import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import UrlShortener from "./UrlShortner";

const Landing = () => {
  return (
    
    <Box  >
      <Image
        src="https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Homepage Image"
        
        h={{ base: "100vh", md: "100%" , lg:"100%" }}
        w="100%"
        objectFit="cover"
      />

      <Box
        position="absolute"
        top="15%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <UrlShortener />
      </Box>
    </Box>
  );
};

export default Landing;
