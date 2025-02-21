import Image from "next/image";
import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex-center h-screen flex w-screen"
      style={{ height: "100vh" }}
    >
      <div className="relative h-full w-full bg-primary-pressed">
        <Image
          src="/images/authBackground.png"
          alt="authBackground"
          width={1000}
          height={1000}
          className="object-fit h-full w-full"
        />
        <div className="absolute left-[72px] top-[182px] w-[482px] text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <circle cx="24" cy="24" r="24" fill="white" />
          </svg>
          <p className="mt-4 text-[56px] font-semibold leading-[64px]">
            Design with us
          </p>
          <p className="mt-4 text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            lobortis maximus nunc, ac rhoncus odio congue quis. Sed ac semper
            orci, eu porttitor lacus.{" "}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}

export default AuthLayout;
