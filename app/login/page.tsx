import { getCurrentUser } from "@/actions/getCurrentUser";
import LoginForm from "@/components/Login/LoginForm";
import Container from "@/components/ui/Container";
import FormWrap from "@/components/ui/FormWrap";
import React from "react";

const LoginPage = async () => {
  const currentUser = await getCurrentUser();
  return (
    <Container>
      <FormWrap>
        <LoginForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  );
};

export default LoginPage;
