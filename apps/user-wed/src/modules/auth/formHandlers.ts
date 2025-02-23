/* eslint-disable @nx/enforce-module-boundaries */
"use server";

// import { toast } from "react-toastify";
import AuthService from "userSrc/services/auth";

export async function submitLogInForm(formData: FormData) {
  const username = (formData.get("username") as string | null) ?? "";
  const password = (formData.get("password") as string | null) ?? "";
  const result = await AuthService.signIn({ username, password }, (res: any) => {
    // toast(res.status, {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
  });
}

export async function submitSignUpForm(formData: FormData) {
  const email = (formData.get("email") as string | null) ?? "";
  const result = await AuthService.signUp(email);
}