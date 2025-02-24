/* eslint-disable @nx/enforce-module-boundaries */
"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import ForgotPassword from "userSrc/modules/auth/ForgotPassword";
import ResetPassword from "userSrc/modules/auth/ResetPassword";

function ForgotPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return token ? <ResetPassword token={token} /> : <ForgotPassword />;
}

export default ForgotPasswordPage;
