import React, { Component } from "react";
import {
  Button,
  ButtonGroup,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  FormErrorText,
} from "@chakra-ui/react";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email && this.state.password) {
      this.setState({
        email: "",
        password: "",
      });
    } else {
      alert("No email and/or password were entered");
    }
  };

  render() {
    return (
      <form id="loginForm" onSubmit={this.handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <EmailInput
            name="email"
            variant="outline"
            value={this.state.email}
            onChange={this.onChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <PasswordInput
            name="password"
            variant="outline"
            value={this.state.password}
            onChange={this.onChange}
          />
          <Button
            colorScheme="purple"
            variant="ghost"
            width="full"
            type="submit"
          >
            login
          </Button>
        </FormControl>
      </form>
    );
  }
}

export default LoginForm;
