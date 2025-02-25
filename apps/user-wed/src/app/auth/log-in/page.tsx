/* eslint-disable @nx/enforce-module-boundaries */
import SvgIconComponent from "@libs/svgIcon";
import { EnumSvgIcon } from "@libs/svgIcon/iconEnum";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { appPaths } from "userSrc/common/constants/appPaths";
import LoginForm from "userSrc/modules/auth/SignIn";

export const metadata: Metadata = {
  title: "Sign In page",
  description: "Sign In page",
};

function LogInPage() {
  return (
    <div className="h-full w-full bg-white">
      <div className="mt-[100px]">
        <Image
          className="mx-auto mb-4 mt-6"
          src="/images/neguLogo.png"
          alt="logo"
          width={80}
          height={80}
        />
        <div className="mx-auto flex w-[568px] flex-col gap-12">
          <p className="text-center text-4xl font-extrabold leading-normal text-neutral-90">
            Sign In
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
          <LoginForm />
          <Link
            href={appPaths.auth.signUp}
            className="mr-auto text-16xNormal text-neutral-90"
          >
            Don’t have an account?{" "}
            <span className="cursor-pointer underline">Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
