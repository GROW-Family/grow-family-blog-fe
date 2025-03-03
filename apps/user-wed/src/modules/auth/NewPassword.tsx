/* eslint-disable @nx/enforce-module-boundaries */
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import AuthService from "userSrc/services/auth";

import { preventDefaultClickEvent } from "userSrc/utils/utils";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Image from "next/image";
import { toast } from "react-toastify";

type Props = {
  token?: string;
};

function NewPassword({ token }: Props) {
  const router = useRouter();
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    if (token) {
      Cookies.set("token", token, { expires: 7 * 24 * 60 * 60 });
    }
    getData(token);
  }, []);

  const getData = async (token) => {
    const dataProfile = await AuthService.getProfile(token);
    setUserId(dataProfile?.data?.userId)
    return dataProfile;
  };

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm: false,
  });

  const handleClickShow = (field: "password" | "confirm") => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const res = await AuthService.changePassword(userId, password);
    const { success, status } = res;
    if (success || status === 200) {
      toast.success("Password change successful", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.replace("/");
    }
  };

  return (
    <div className="w-full h-screen bg-white">
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
              <FormControl variant="outlined" className="w-full">
                <InputLabel htmlFor="password">
                  New Password
                </InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
                  type={showPassword.password ? "text" : "password"}
                  sx={{ borderRadius: "12px" }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword.password
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={() => handleClickShow("password")}
                        onMouseDown={preventDefaultClickEvent}
                        onMouseUp={preventDefaultClickEvent}
                        edge="end"
                      >
                        {showPassword.password ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="New Password"
                />
              </FormControl>
              <FormControl variant="outlined" className="w-full">
                <InputLabel htmlFor="confirm-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="confirm-password"
                  name="confirm-password"
                  type={showPassword.confirm ? "text" : "password"}
                  sx={{ borderRadius: "12px" }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword.confirm
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={() => handleClickShow("confirm")}
                        onMouseDown={preventDefaultClickEvent}
                        onMouseUp={preventDefaultClickEvent}
                        edge="end"
                      >
                        {showPassword.confirm ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                />
              </FormControl>
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

export default NewPassword;
