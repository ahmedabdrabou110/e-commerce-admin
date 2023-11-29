"use client";
import React, { useState, useEffect } from "react";
import Heading from "../ui/Heading";
import { AiOutlineGoogle } from "react-icons/ai";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/Input";
import Button from "../ui/Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { LoginFormProps } from "@/utils/interfaces";
const LoginForm: React.FC<LoginFormProps> = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, []);
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
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Logged In");
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  if (currentUser) {
    return <p className="text-center">Logged In. Redirecting ...</p>;
  }

  return (
    <>
      <Heading title="Sign in For Alamsa" center />
      <Button
        label="Sign in With Google"
        icon={AiOutlineGoogle}
        onClick={() => signIn("google")}
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
