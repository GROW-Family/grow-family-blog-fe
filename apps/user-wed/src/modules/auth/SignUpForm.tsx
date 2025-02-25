/* eslint-disable @nx/enforce-module-boundaries */
"use client";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import AuthService from "userSrc/services/auth";

function SignUpForm() {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const res = await AuthService.verifyEmail(email);
    const { success, message } = res;
    if (success) {
      toast.success(message, {
        position: "top-center",
        autoClose: 7000,
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
          name="email"
          label="Email address"
          className="w-full"
          InputProps={{
            style: {
              borderRadius: "12px",
            },
          }}
          variant="outlined"
        />
        <button
          type="submit"
          className="flex-center mr-auto h-16 w-[304px] rounded-[32px] bg-info-main text-xl font-semibold leading-normal text-white"
        >
          Sign up
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
