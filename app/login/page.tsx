import LoginForm from "@/components/Login/LoginForm";
import Container from "@/components/ui/Container";
import FormWrap from "@/components/ui/FormWrap";
import React from "react";

const LoginPage = () => {
  return (
    <Container>
      <FormWrap>
        <LoginForm />
      </FormWrap>
    </Container>
  );
};

export default LoginPage;
