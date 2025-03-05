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
  const [errors, setErrors] = useState<{
    password?: string;
    confirmPassword?: string;
  }>({});

  useEffect(() => {
    if (token) {
      Cookies.set("token", token, { expires: 7 * 24 * 60 * 60 });
    }
    getData(token);
  }, []);

  const getData = async (token) => {
    const dataProfile = await AuthService.getProfile(token);
    setUserId(dataProfile?.data?.userId);
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
    const confirmPassword = formData.get("confirm-password") as string;

    const newErrors: { password?: string; confirmPassword?: string } = {};

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required.";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

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
    <div className="h-screen w-full bg-white">
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
              <FormControl
                variant="outlined"
                className="w-full"
                error={!!errors.password}
              >
                <InputLabel htmlFor="password">New Password</InputLabel>
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
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                )}
              </FormControl>
              <FormControl
                variant="outlined"
                className="w-full"
                error={!!errors.confirmPassword}
              >
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
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
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
