"use client";
import { useState } from "react";
import Heading from "../ui/Heading";
import { Input } from "../ui/Input";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "../ui/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };
  return (
    <>
      <Heading title="Sign up for Almasa " center />
      <Button
        outline
        icon={AiOutlineGoogle}
        label="Sign Up with google"
        onClick={() => {}}
      />
      <hr className="bg-slate-300  w-full h-px" />
      <Input
        disabled={isLoading}
        register={register}
        errors={errors}
        id="name"
        label="Name"
        required
        type="text"
      />
      <Input
        disabled={isLoading}
        register={register}
        errors={errors}
        id="email"
        label="Email"
        type="email"
        required
      />
      <Input
        disabled={isLoading}
        register={register}
        errors={errors}
        id="password"
        label="Passowrd"
        type="password"
        required
      />
      <Button
        label={isLoading ? "Loading..." : "Sign Up"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        Already have an account ?{" "}
        <Link className="underline" href="/login">
          Log in
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
