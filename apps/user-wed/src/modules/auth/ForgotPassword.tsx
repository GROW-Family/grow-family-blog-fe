/* eslint-disable @nx/enforce-module-boundaries */

import AuthService from "userSrc/services/auth";

import Image from "next/image";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";

function ForgotPassword() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const res = await AuthService.forgotPassword(email);
    const { success } = res;
    if (success) {
      toast.success("Please check your email", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="h-full w-full bg-white">
      <div className="mt-[100px]">
        <Image
          className="mx-auto mb-4 mt-6"
          src="/images/neguLogo.png"
          alt="logo"
          width={80}
          height={80}
        />
        <div className="mx-auto flex w-[568px] flex-col gap-12">
          <p className="text-center text-4xl font-extrabold leading-normal text-neutral-90">
            Forgot Password
          </p>
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
