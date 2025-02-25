/* eslint-disable @nx/enforce-module-boundaries */
import SvgIconComponent from "@libs/svgIcon";
import { EnumSvgIcon } from "@libs/svgIcon/iconEnum";
import type { Metadata } from "next";
import Image from "next/image";
import SignUpForm from "userSrc/modules/auth/SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up page",
  description: "Sign Up page",
};

function SignUpPage() {
  return (
    <div className="flex-col-center h-screen bg-white">
      <div className="h-max">
        <Image
          className="mx-auto mb-4"
          src="/images/neguLogo.png"
          alt="logo"
          width={80}
          height={80}
        />
        <div className="mx-auto flex w-[568px] flex-col gap-8">
          <p className="text-center text-4xl font-extrabold leading-normal text-neutral-90">
            Sign Up
          </p>
          <div className="flex-center h-16 cursor-pointer gap-4 rounded-[40px] border border-neutral-90">
            <SvgIconComponent icon={EnumSvgIcon.google} />
            Continue with Google
          </div>
          <div className="flex-center gap-6">
            <hr className="h-[2px] w-full border-neutral-50" />
            <p className="text-16xNormal font-medium text-neutral-90">OR</p>
            <hr className="h-[2px] w-full border-neutral-50" />
          </div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
