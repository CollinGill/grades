import {
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import NameInput from "./NameInput";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const passwordMatch = password === confirmation;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordMatch) {
      console.log("Name: " + firstName + " " + lastName);
      console.log("Email: " + email);
      console.log("Password: " + password);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmation("");
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel htmlFor="firstName">First Name</FormLabel>
        <NameInput
          name="firstName"
          variant="outline"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="firstName">Last Name</FormLabel>
        <NameInput
          name="lastName"
          variant="outline"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormControl>
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
        <FormLabel htmlFor="email">Password</FormLabel>
        <PasswordInput
          name="password"
          variant="outline"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="email">Password Confirmation</FormLabel>
        <PasswordInput
          name="passwordConfirmation"
          variant="outline"
          value={confirmation}
          onChange={(e) => {
            setConfirmation(e.target.value);
          }}
        />
        <Button colorScheme="purple" variant="ghost" width="full" type="submit">
          register
        </Button>
        {passwordMatch ? (
          <></>
        ) : (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>Passwords don't match!</AlertTitle>
            <CloseButton position="absolute" right="8px" top="8px" />
          </Alert>
        )}
      </FormControl>
    </form>
  );
};

export default RegisterForm;
