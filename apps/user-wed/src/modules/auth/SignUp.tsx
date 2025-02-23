import SvgIconComponent from "@libs/svgIcon";
import { EnumSvgIcon } from "@libs/svgIcon/iconEnum";
import { TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { appPaths } from "../../common/constants/appPaths";
import { submitLogInForm } from "./formHandlers";

function SignUp() {
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
          <form action={submitLogInForm}>
            <div className="flex-col-center gap-[18px]">
              <TextField
                name="email"
                label="Email address"
                className="w-full"
                InputProps={{
                  style: {
                    borderRadius: "12px",
                  },
                }}
                variant="outlined"
              />
              <button
                type="submit"
                className="flex-center mr-auto h-16 w-[304px] rounded-[32px] bg-neutral-100 text-xl font-semibold leading-normal text-white opacity-25"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
