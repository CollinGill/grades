import React from "react";
import { Input } from "@chakra-ui/react";

const NameInput = (props) => {
  return (
    <Input
      type="text"
      name={props.name}
      variant={props.variant}
      value={props.value}
      onChange={props.onChange}
      placeholder="First name"
      size="md"
    />
  );
};

export default NameInput;
