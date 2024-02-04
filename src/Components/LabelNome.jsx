import { FormLabel } from "@chakra-ui/react";

function LabelNome(props) {
  return (
    <>
      <FormLabel
        ml={"30%"}
        marginBottom={"10px"}
        marginTop={"10%"}
        fontSize={"20px"}
        fontWeight={"bold"}
      >
        Nome
      </FormLabel>
    </>
  );
}

export default LabelNome;
