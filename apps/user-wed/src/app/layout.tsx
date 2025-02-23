/* eslint-disable @nx/enforce-module-boundaries */
"use client";
import ToastProvider from "userSrc/layouts/ToastProvider";
import StoreProvider from "./StoreProvider";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <div>
            <ToastProvider>{children}</ToastProvider>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
