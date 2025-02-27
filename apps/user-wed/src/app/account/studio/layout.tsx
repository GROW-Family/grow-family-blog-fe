/* eslint-disable @nx/enforce-module-boundaries */
"use client";
import React from "react";
import MainLayout from "userSrc/layouts/MainLayout";

export default function layout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
