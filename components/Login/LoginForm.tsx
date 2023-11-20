"use client";
import { useState } from "react";
import Heading from "../ui/Heading";
import { AiOutlineGoogle } from "react-icons/ai";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/Input";
import Button from "../ui/Button";
import Link from "next/link";
const LoginForm = () => {
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
      <Heading title="Sign in For Alamsa" center />
      <Button
        label="Sign in With Google"
        icon={AiOutlineGoogle}
        onClick={() => {}}
        outline
      />
      <hr className="w-full h-px bg-slate-300 " />
      <Input
        disabled={isLoading}
        register={register}
        errors={errors}
        id="email"
        label="Email"
        required
        type="email"
      />
      <Input
        disabled={isLoading}
        register={register}
        errors={errors}
        id="password"
        label="Password"
        required
        type="password"
      />
      <Button
        label={isLoading ? "Loading..." : "Login"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        Don't hane an account ?{" "}
        <Link href="/register" className="underline">
          sign up
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
