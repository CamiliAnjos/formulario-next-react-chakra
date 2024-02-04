import { Flex, Input } from "@chakra-ui/react";
import React from "react";

function Inputs({ value, onChange }) {
  return (
    <Flex marginTop={""}>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        className="inputs"
        margin={"0 30%"}
        border={"1px solid #B4B4B4"}
        bgColor={"#F4F4F4"}
        h={"60px"}
        _hover={{ bgColor: "#9849d910" }}
        marginBottom={"15px"}
      />
    </Flex>
  );
}

export default Inputs;
