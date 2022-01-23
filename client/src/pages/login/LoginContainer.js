import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import LoginForm from "./LoginForm";

const LoginContainer = () => {
  return (
    <Flex width="full" align="center" justifyContent="Center">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginContainer;
