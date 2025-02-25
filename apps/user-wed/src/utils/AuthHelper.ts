"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

class AuthHelper {
  static getCookies(): string | null {
    const isExistUser = cookies().get("token")?.value;
    if (!isExistUser) return null;
    return isExistUser;
  }
  static removeCookies(redirectLogin = false) {
    cookies().delete("token");
    if (redirectLogin) redirect("/login");
  }
  static async setCookies(token: string) {
    // const newExpires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    await cookies().set("token", token, {
      httpOnly: true,
      // maxAge: 30 * 60,
      // expires: newExpires,
      // domain: 'localhost',
    });
  }
}

export default AuthHelper;
