import { Center, Flex, Box, Heading } from "@chakra-ui/react";
import React from "react";

import RegisterForm from "./RegisterForm";

const RegisterContainer = () => {
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Center>
        <Box
          p={8}
          maxWidth="500px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
        >
          <Box textAlign="center">
            <Heading>register</Heading>
          </Box>
          <Box my={4} textAlign="left" p="6">
            <RegisterForm />
          </Box>
        </Box>
      </Center>
    </Flex>
  );
};

export default RegisterContainer;
