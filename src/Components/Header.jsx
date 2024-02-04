import { Flex } from "@chakra-ui/react";
import Title from "../Components/Title";

function Header() {
  return (
    <Flex w={"100%"} h={"25%"} bgColor={"#8049D9"}>
      <Title />
    </Flex>
  );
}

export default Header;
