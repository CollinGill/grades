import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  useDisclosure,
  Text,
  Box,
  Center,
} from "@chakra-ui/react";
import PasswordInput from "../../components/PasswordInput";
import EmailInput from "../../components/EmailInput";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const noEmail = email === "";
  const noPassword = password === "";

  const isError = noEmail || noPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: login: if incorrect login information
    if (!isError) {
      console.log("Email: " + email);
      console.log("Password: " + password);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form id="loginForm" onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel htmlFor="email">Email</FormLabel>
        <EmailInput
          name="email"
          variant="outline"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="password">Password</FormLabel>
        <PasswordInput
          name="password"
          variant="outline"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="purple" variant="ghost" width="full" type="submit">
          login
        </Button>
      </FormControl>
      <Center>
        <Text>No account?</Text>
      </Center>
      <br />
      <Box>
        <Center>
          <Button colorScheme="purple">
            <Link to={"/register"}>Signup/Register</Link>
          </Button>
        </Center>
      </Box>
    </form>
  );
};

export default LoginForm;
