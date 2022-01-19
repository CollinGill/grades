import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    </form>
  );
};

export default LoginForm;
