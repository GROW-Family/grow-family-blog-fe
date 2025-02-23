/* eslint-disable @nx/enforce-module-boundaries */
import type { Metadata } from "next";
import Login from "userSrc/modules/auth/SignIn";
import AuthLayout from "../../../layouts/AuthLayout";

export const metadata: Metadata = {
  title: "Sign In page",
  description: "Sign In page",
};

function LogInPage() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
}

export default LogInPage;
