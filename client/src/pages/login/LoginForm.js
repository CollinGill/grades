import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Text,
  Box,
  Center,
} from "@chakra-ui/react";
import PasswordInput from "../../components/PasswordInput";
import UsernameInput from "../../components/UsernameInput";
import { Link } from "react-router-dom";
import { gql, useLazyQuery, useQuery } from "@apollo/client";

const LOGIN_USER = gql`
  query LOGIN_USER($username: String!, $password: String!) {
    checkPassword(username: $username, password: $password)
  }
`;

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { result } = useLazyQuery(LOGIN_USER, {
    variables: { username, password },
  });

  console.log(result);

  const noUsername = username === "";
  const noPassword = password === "";

  const isError = noUsername || noPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: login: if incorrect login information

    if (result) {
      console.log("Username: " + username);
      console.log("Password: " + password);
      setUsername("");
      setPassword("");
    } else {
      console.log("Nope");
    }
  };

  return (
    <form id="loginForm" onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel htmlFor="username">Username</FormLabel>
        <UsernameInput
          name="username"
          variant="outline"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
