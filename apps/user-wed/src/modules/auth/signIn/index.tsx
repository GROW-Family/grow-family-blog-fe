import SvgIconComponent from "@libs/svgIcon";
import { EnumSvgIcon } from "@libs/svgIcon/iconEnum";
import { ButtonBase, TextField } from "@mui/material";
import { appPaths } from "apps/user-wed/src/common/constants/appPaths";
import Image from "next/image";
import Link from "next/link";
import { submitSignInForm } from "./formHandle";

function Login() {
  return (
    <div className="mt-[100px] h-full w-full bg-white">
      <Image
        className="mx-auto mb-4 mt-6"
        src="/images/neguLogo.png"
        alt="logo"
        width={80}
        height={80}
      />
      <div className="mx-auto flex w-[568px] flex-col gap-12">
        <p className="text-2xl font-extrabold leading-normal text-neutral-90">
          Sign in
        </p>
        <div className="flex-center h-16 gap-4 rounded-[40px] border border-neutral-90">
          <SvgIconComponent icon={EnumSvgIcon.google} />
          Continue with Google
        </div>
        <div className="flex-center gap-6">
          <hr className="h-[2px] w-full border-neutral-50" />
          <p className="text-16xNormal font-medium text-neutral-90">OR</p>
          <hr className="h-[2px] w-full border-neutral-50" />
        </div>
        <form action={submitSignInForm}>
          <div className="flex-col-center gap-[18px]">
            <TextField
              name="username"
              label="User name or email address"
              className="w-full"
              InputProps={{
                style: {
                  borderRadius: "12px",
                },
              }}
              variant="outlined"
            />
            <div className="flex w-full flex-col">
              <TextField
                name="password"
                label="Your password"
                InputProps={{
                  style: {
                    borderRadius: "12px",
                  },
                }}
                type="password"
              />
              <Link
                href={appPaths.auth.forgotPassword}
                className="text-16xNormal ml-auto mt-2 w-max cursor-pointer underline"
              >
                Forget your password
              </Link>
            </div>
            <ButtonBase
              type="submit"
              className="flex-center mr-auto h-16 w-[304px] rounded-[32px] bg-neutral-100 text-xl font-semibold leading-normal text-white opacity-25"
            >
              Sign in
            </ButtonBase>
          </div>
        </form>
        <Link
          href={appPaths.auth.signUp}
          className="text-16xNormal mr-auto text-neutral-90"
        >
          Don’t have an acount?{" "}
          <span className="cursor-pointer underline">Sign up</span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
