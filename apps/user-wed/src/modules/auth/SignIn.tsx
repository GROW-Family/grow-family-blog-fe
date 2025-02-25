/* eslint-disable @nx/enforce-module-boundaries */
"use client";
import { TextField } from "@mui/material";
import Link from "next/link";
import AuthService from "userSrc/services/auth";
import { appPaths } from "../../common/constants/appPaths";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function LoginForm() {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userName = formData.get("username") as string;
    const password = formData.get("password") as string;
    const res = await AuthService.signIn({
      userName,
      password,
    });
    const { success, data } = res;
    if (success) {
      Cookies.set("token", data, { expires: 7 * 24 * 60 * 60 });
      toast.success("Login successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // get callbackUrl from url
      const callbackUrl = window.location.search.split("callbackUrl=")[1];
      if (callbackUrl) {
        router.replace(callbackUrl);
      } else {
        router.replace("/");
      }
    }
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
