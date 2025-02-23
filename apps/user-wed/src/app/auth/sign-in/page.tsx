/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @nx/enforce-module-boundaries */
"use client";
import type { Metadata } from "next";
import Login from "userSrc/modules/auth/SignIn";
import AuthLayout from "../../../layouts/AuthLayout";
import ErrorBoundary from "./aaa";

// export const metadata: Metadata = {
//   title: "Sign In page",
//   description: "Sign In page",
// };

function LogInPage() {
  return (
    <ErrorBoundary>
      <AuthLayout>
        <Login />
      </AuthLayout>
    </ErrorBoundary>
  );
}

export default LogInPage;
