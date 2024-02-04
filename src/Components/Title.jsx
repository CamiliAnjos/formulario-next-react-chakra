import { Text, Flex } from "@chakra-ui/react";
import Span from "../Components/Span";

function Title() {
  return (
    <>
      <Text
        fontSize={"50px"}
        w={"100%"}
        fontWeight={"bolder"}
        color={"white"}
        fontFamily={"inter"}
      >
        <Span>Tech</Span>tudo
      </Text>
    </>
  );
}

export default Title;
