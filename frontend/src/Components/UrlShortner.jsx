import React, { useState } from "react";
import axios from "axios";
import { toast} from "react-toastify";

import {
  Box,
  Input,
  Button,
  Link,
  useColorMode,
  Heading,
} from "@chakra-ui/react";

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const { colorMode } = useColorMode();
 
  const handleShortenUrl = async () => {
    if (!originalUrl.trim()) {
          toast.error("Please enter a valid URL");
          return;
        }
    try {
      const response = await axios.post("https://url-shortner-topaz-iota.vercel.app/api/shorten", {
        originalUrl: originalUrl,
      });

      console.log("Response:", response.data);
      setShortenedUrl(response.data.shortUrl);
      toast.success("URL shortened successfully");
    } catch (error) {
      console.error("Error:", error.message);
      toast.error(`Error in shortening URL: ${error.message}`);
    }
  };
  const handleCopyClick = async () => {
    if (!shortenedUrl) {
      toast.error("No URL to copy");
      return;
    }

    try {
      await navigator.clipboard.writeText(shortenedUrl);
      toast.success("Copied successfully");
    } catch (error) {
      console.error("Error:", error.message);
      toast.error(`Error in copy: ${error.message}`);
    }
  };

  return (
    <Box
      mt="200px"
      p={4}
      bg={colorMode === "light" ? "white" : "gray.800"}
      minH="20vh"
      rounded="lg"
      boxShadow="lg"
    >
      <Heading
        mb={4}
        size="lg"
        color={colorMode === "light" ? "blue.600" : "blue.300"}
      >
        URL Shortener
      </Heading>
      <Input
        type="text"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        placeholder="Enter URL"
        mb={4}
      />
      <Button colorScheme="teal" onClick={handleShortenUrl} mb={4}>
        Shorten URL
      </Button>
      {shortenedUrl && (
        <Box
          bg={colorMode === "light" ? "gray.100" : "gray.700"}
          p={4}
          borderRadius="md"
        >
          <Heading size="sm">Shortened URL:</Heading>
          <Link
            href={shortenedUrl}
            target="_blank"
            rel="noopener noreferrer"
            mb={2}
            display="block"
          >
            {shortenedUrl}
          </Link>
          <Button onClick={handleCopyClick} colorScheme="blue" size="sm">
            Copy to Clipboard
          </Button>
        </Box>
      )}
    
    </Box>
  );
};

export default UrlShortener;
