/* eslint-disable @nx/enforce-module-boundaries */
"use client";
import { TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { toast } from "react-toastify";
import AuthService from "userSrc/services/auth";
import { appPaths } from "../../common/constants/appPaths";

function LoginForm() {
  const { mutate, data } = useMutation({
    // mutationKey: ["auth", "login"],
    mutationFn: async (payload: any) => {
      const result = await AuthService.signIn(payload);

      return result;
    },
    onSuccess: (res: any) => {
      toast(res, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const userName = data.get("username") as string;
    const password = data.get("password") as string;

    mutate({
      userName,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex-col-center gap-[18px]">
        <TextField
          name="username"
          label="User name or email address"
          className="w-full"
          InputProps={{
            style: {
              borderRadius: "12px",
            },
          }}
          variant="outlined"
        />
        <div className="flex w-full flex-col">
          <TextField
            name="password"
            label="Your password"
            InputProps={{
              style: {
                borderRadius: "12px",
              },
            }}
            type="password"
          />
          <Link
            href={appPaths.auth.forgotPassword}
            className="ml-auto mt-2 w-max cursor-pointer text-16xNormal underline"
          >
            Forget your password
          </Link>
        </div>
        <button
          type="submit"
          className="flex-center mr-auto h-16 w-[304px] rounded-[32px] bg-info-main text-xl font-semibold leading-normal text-white"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
