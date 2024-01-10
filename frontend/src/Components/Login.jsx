import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginfunc } from "../redux/auth/action";
import { toast, ToastContainer } from "react-toastify";
import logo from "../assest/polar.gif";
import logo1 from "../assest/florid.gif";
const Login = () => {
  const data = useSelector((state) => state);
  console.log(data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please provide both Email and Password,.");
      return;
    }

    dispatch(loginfunc({ email, password, navigate }));

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Box
        width="100%"
        px={10}
        display="grid"
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(1,1fr)",
          "repeat(3,1fr)",
        ]}
      >
        <Box mt="150px">
          <Image src={logo} borderRadius={10}   width="80%"/>
        </Box>
        <Box
          p={4}
          m="auto"
          mt="200px"
          width="100%"
          borderWidth="1px"
          borderRadius="md"
          boxShadow="lg"
          className="login-container slide-in-left"
        >
          <Heading as="h2" size="xl" textAlign="center" mb={6}>
            Login
          </Heading>
          <form onSubmit={handleLogin}>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="password" mb={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>

            <Button type="submit" colorScheme="green" size="lg" mt={4} w="100%">
              Login
            </Button>
          </form>
        </Box>

        <Box mt="150px">
          <Image src={logo1} borderRadius={10} width="80%" />
        </Box>
        <ToastContainer position="top-right" />
      </Box>
    </>
  );
};

export default Login;
