import React from "react";

import {
  Box,
  Button,
  useColorMode,
  useColorModeValue,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import NavMenu from "./NavMenu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginBottom={"3em"}
        >
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Stack
              direction={"row"}
              spacing={"70px"}
              mb={4}
              mt={4}
              align="flex-start"
            >
              <Box p="3">
                <NavMenu />
              </Box>
              <Box p="3">
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
