/* eslint-disable @nx/enforce-module-boundaries */
"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ToastProvider from "userSrc/layouts/ToastProvider";
import StoreProvider from "./StoreProvider";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="vi">
      <body>
        <QueryClientProvider client={queryClient}>
          <StoreProvider>
            <ToastProvider>{children}</ToastProvider>
          </StoreProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
