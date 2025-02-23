/* eslint-disable @nx/enforce-module-boundaries */
"use server";

// import { toast } from "react-toastify";
import AuthService from "userSrc/services/auth";

export async function submitLogInForm(payload: {
  userName: string;
  password: string;
}) {
  console.log("payload", payload);
  const result = await AuthService.signIn(payload);

  return result;
}

export async function submitSignUpForm(formData: FormData) {
  const email = (formData.get("email") as string | null) ?? "";
  const result = await AuthService.signUp(email);
}
