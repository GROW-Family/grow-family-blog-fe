/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/
'use client';

import Link from 'next/link'
import Image from "next/image";

import { useState } from "react";

function Login() {

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible(prevState => !prevState);

  const _renderEyeIcon = () => {
    return isVisible ? (
      <Image
        src="/images/icons/eye.svg"
        alt="eye-off"
        width={24}
        height={24}
        onClick={toggleVisibility}
      />
    ) : (
      <Image
        src="/images/icons/eye-off.svg"
        alt="eye"
        width={24}
        height={24}
        onClick={toggleVisibility}
      />
    );
  }
  
  return (
    <div className="flex relative w-full h-screen bg-white">
      <div className="flex justify-center w-full top-0 right-0 p-4">
        <div className="w-full bg-white mt-8 pl-24 pr-24">
          <Image
            src="/images/logo/logo.jpg"
            alt="logo"
            width={60}
            height={60}
            className="flex mx-auto w-20 h-20"
          />
          <h1 className="text-4xl font-semibold leading-[48px] my-6 text-gray-800 text-center">
            Sign in
          </h1>
          <div className="flex flex-col items-center gap-4 w-full">
            <button className="w-full h-16 border border-gray-800 rounded-full flex items-center justify-center gap-4 text-xl font-normal cursor-pointer bg-white transition-all duration-300 hover:border-blue-800 hover:bg-blue-300">
            <Image
              src="/images/icons/google.png"
              alt="google icon"
              width={24}
              height={24}
            />
              Continue with Google
            </button>
          </div>
          <div className="flex items-center justify-center overflow-hidden line-height-0.5 text-center my-6 relative">
            <p className="relative text-lg font-normal text-gray-500 inline-block before:content-[''] before:absolute before:h-[13px] before:border-b before:border-gray-300 before:w-[600px] before:right-full before:mr-4 after:content-[''] after:absolute after:h-[13px] after:border-b after:border-gray-300 after:w-[600px] after:left-full after:ml-4">
              OR
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-col w-full">
              <span className="text-[#666666] font-sans text-[16px] my-1">User name or email address</span>
              <input
                className="w-full h-12 border border-gray-400 rounded-xl px-4"
                name="email"
              />
            </div>
            
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <span className="text-[#666666] font-sans text-[16px] my-1">Your password</span>
                <button className="flex gap-2 items-center text-[#666666] font-sans text-[18px] my-1" 
                  onClick={toggleVisibility}
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  aria-pressed={isVisible}
                  aria-controls="password">
                    <_renderEyeIcon />
                  Hide
                </button>
              </div>
              
              <input
                className="w-full h-12 border border-gray-400 rounded-xl px-4"
                id="password"
                name="text"
                type={isVisible ? "text" : "password"}
                aria-label="Password"
              />
            </div>

          </div>
          <div className="text-right mt-3">
            <Link href="/forget-password" className="text-base font-normal underline cursor-pointer text-gray-900">Forget your password</Link>
          </div>
          <button className="w-[300px] h-16 bg-blue-600 text-white border-none rounded-full cursor-pointer transition-all duration-300 text-xl font-normal mt-4 mb-3 hover:bg-blue-800"
          >
            Sign in
          </button>
          <br />
          <span className="text-base font-normal text-gray-500">
            Don&apos;t have an account?
            <Link href="/auth/signUp" className="underline ml-1 text-gray-900">Sign up</Link>
          </span>
        </div>
      </div>
    </div>
  );
}


export default Login;
