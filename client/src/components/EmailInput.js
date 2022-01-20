import React from "react";
import { Input } from "@chakra-ui/react";

const EmailInput = (props) => {
  return (
    <Input
      type="text"
      name={props.name}
      variant={props.variant}
      value={props.value}
      onChange={props.onChange}
      placeholder="Enter email"
      size="md"
    />
  );
};

export default EmailInput;
