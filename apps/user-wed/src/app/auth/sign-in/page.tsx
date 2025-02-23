import type { Metadata } from "next";
import AuthLayout from "../../../layouts/AuthLayout";
import Login from "../../../modules/auth/signIn";

export const metadata: Metadata = {
  title: "Sign In page",
  description: "Sign In page",
};

function SignIn() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
}

export default SignIn;
