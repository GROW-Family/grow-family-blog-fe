/* eslint-disable @nx/enforce-module-boundaries */
import type { Metadata } from "next";
import SignUp from "userSrc/modules/auth/SignUp";
import AuthLayout from "../../../layouts/AuthLayout";

export const metadata: Metadata = {
  title: "Sign Up page",
  description: "Sign Up page",
};

function SignUpPage() {
  return (
    <AuthLayout>
      <SignUp />
    </AuthLayout>
  );
}

export default SignUpPage;
