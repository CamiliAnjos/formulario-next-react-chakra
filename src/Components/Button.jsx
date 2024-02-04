import { Button } from "@chakra-ui/react";

function Btn({ onClick }) {
  return (
    <>
      <Button
        type="submit"
        colorScheme="blue"
        margin={"0 30% 0 30%"}
        marginTop={"20px"}
        h={"70px"}
        fontSize={"20px"}
        fontWeight={"bold"}
        onClick={onClick}
      >
        Acessar
      </Button>
    </>
  );
}

export default Btn;
