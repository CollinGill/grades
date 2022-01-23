import { Box, Center, Container, Heading } from "@chakra-ui/react";
import React from "react";

// Components
import AppDesc from "./AppDesc.js";

const LandingContainer = () => {
  return (
    <Container maxW="container.lg">
      <Center>
        <Box mb="6rem">
          <Heading fontSize="60px">grades</Heading>
        </Box>
      </Center>
      <AppDesc />
    </Container>
  );
};

export default LandingContainer;
