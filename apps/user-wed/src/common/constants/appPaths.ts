export const appPaths = {
  home: "/",
  auth: {
    logIn: "/auth/log-in",
    signUp: "/auth/sign-up",
    forgotPassword: "/auth/forgot-password",
    changePassword: "/auth/change-password",
  },
  account: {
    profile: "/account/profile",
  },
};
export const privateRoutes: string[] = ["/account"];
export const authRoutes: string[] = ["/auth"];