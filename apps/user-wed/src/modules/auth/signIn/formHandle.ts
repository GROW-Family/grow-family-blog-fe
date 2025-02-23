/* eslint-disable @nx/enforce-module-boundaries */
"use server";

// import { toast } from "react-toastify";
import AuthService from "userSrc/services/auth";

export async function submitSignInForm(formData: FormData) {
  const username = (formData.get("username") as string | null) ?? "";
  const password = (formData.get("password") as string | null) ?? "";
  AuthService.signIn({ username, password }, (res: any) => {
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
