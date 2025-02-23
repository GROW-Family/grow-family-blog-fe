/* eslint-disable @nx/enforce-module-boundaries */
import type { Metadata } from "next";
import SignUp from "userSrc/modules/auth/SignUp";

export const metadata: Metadata = {
  title: "Sign Up page",
  description: "Sign Up page",
};

function SignUpPage() {
  return <SignUp />;
}

export default SignUpPage;
