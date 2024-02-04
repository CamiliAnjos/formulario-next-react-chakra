"use client";
import "../app/globals.css";
import { useFormik } from "formik";
import * as yup from "yup";

import { Flex } from "@chakra-ui/react";
import Header from "../Components/Header";
import Form from "../Components/Form";

const validationScheme = yup.object({
  name: yup.string(),
  technology: yup.string(),
  company: yup.string(),
});

export default function Page() {
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      technology: "",
      company: "",
    },
    onSubmit: (values) => {
      console.log({ values });
    },
    validationSchema: validationScheme,
  });

  return (
    <Flex h={"100%"} bgColor={"#D6CFFE"} direction={"column"} align={"center"}>
      <Header />
      <Form />
    </Flex>
  );
}
