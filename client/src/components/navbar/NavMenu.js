import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Menu,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Menu>
        <Button onClick={onOpen} ref={btnRef}>
          <HamburgerIcon />
          <Drawer
            placement="left"
            onClose={onClose}
            isOpen={isOpen}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <Stack spacing={"24px"}>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/login"}>Login</Link>
                  </li>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Button>
      </Menu>
    </>
  );
};

export default NavMenu;
