/* eslint-disable @nx/enforce-module-boundaries */
"use server";

import { signInService } from "userSrc/services/auth";

export async function submitSignInForm(
  formData: FormData,
  callback?: (res: any) => void,
) {
  const username = (formData.get("username") as string | null) ?? "";
  const password = (formData.get("password") as string | null) ?? "";
  signInService({ username, password }, callback);
}
