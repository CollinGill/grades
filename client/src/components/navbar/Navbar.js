import React from "react";

import {
  Box,
  Button,
  useColorMode,
  useColorModeValue,
  Flex,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  Center,
  Avatar,
  MenuDivider,
  MenuItem,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";

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
          marginBottom={"6em"}
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
              <Box p="4" display="flex" flexGrow="1">
                <Menu placement="right">
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar size={"sm"} src={AiOutlineUser} />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar size={"xl"} src={AiOutlineUser} />
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
