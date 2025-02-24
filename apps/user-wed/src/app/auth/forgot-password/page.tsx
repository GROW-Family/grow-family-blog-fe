/* eslint-disable @nx/enforce-module-boundaries */
"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ForgotPassword from "userSrc/modules/auth/ForgotPassword";
import NewPassword from "userSrc/modules/auth/NewPassword";

function ForgotPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return (
    <Suspense>
      {token ? <NewPassword token={token} /> : <ForgotPassword />}
    </Suspense>
  );
}

export default ForgotPasswordPage;
