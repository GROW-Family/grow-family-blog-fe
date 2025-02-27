import { cookies } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

import {
  appPaths,
  authRoutes,
  privateRoutes,
} from "./common/constants/appPaths";


export function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const isLogin = cookies().get("token");
  const exceptSubRoutes = "/" + nextUrl.pathname.split("/")?.[1];
  const isPrivateRoutes = privateRoutes.includes(exceptSubRoutes);
  const isAuthRoutes = authRoutes.includes(exceptSubRoutes);
  if (isAuthRoutes && isLogin)
    return NextResponse.redirect(
      new URL(`${appPaths.home}`, nextUrl.origin),
    );
  if (isPrivateRoutes && !isLogin) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) callbackUrl += nextUrl.search;
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    return NextResponse.redirect(
      new URL(
        `${appPaths.auth.logIn}?callbackUrl=${encodedCallbackUrl}`,
        nextUrl,
      ),
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/(vi|en)/:path*",
  ],
};
