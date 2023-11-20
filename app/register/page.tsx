import RegisterForm from "@/components/Register/RegisterForm";
import Container from "@/components/ui/Container";
import FormWrap from "@/components/ui/FormWrap";
import React from "react";

const RegisterPage = () => {
  return (
    <Container>
      <FormWrap>
        <RegisterForm />
      </FormWrap>
    </Container>
  );
};

export default RegisterPage;
