import { getCurrentUser } from "@/actions/getCurrentUser";
import RegisterForm from "@/components/Register/RegisterForm";
import Container from "@/components/ui/Container";
import FormWrap from "@/components/ui/FormWrap";
import React from "react";

const RegisterPage = async () => {
  const currentUser = await getCurrentUser();
  return (
    <Container>
      <FormWrap>
        <RegisterForm currentUser={currentUser} />
      </FormWrap>
    </Container>
  );
};

export default RegisterPage;
