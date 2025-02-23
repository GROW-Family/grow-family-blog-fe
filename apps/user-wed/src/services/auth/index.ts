/* eslint-disable @nx/enforce-module-boundaries */
import fetcher from "userSrc/apis/fetcher";
import { apiRoutes } from "userSrc/apis/routes";
import AuthHelper from "userSrc/utils/authHelper";

class AuthService {
  static async getPublicKey() {
    const publicKey = await fetcher
      .get(apiRoutes.auth.getPublicKey)
      .then((res) => {
        return res.payload;
      })
      .catch((err) => {
        console.log(err);
        return "";
      });

    return publicKey;
  }

  static async signIn(
    payload: {
      username: string;
      password: string;
    },
    callback?: (res: any) => void,
  ) {
    const key = await this.getPublicKey();
    const pw = AuthHelper.encryptBase64(payload.password, key);
    console.log("file path: `apps/user-wed/src/services/auth/index.ts`")
    console.log({ key, userName: payload.username, password: pw });
    const res = await fetcher
      .post(apiRoutes.auth.signIn, { userName: payload.username, password: pw })
      .then((res) => {
        console.log(res.payload);
        callback?.(res.payload);
        return res.payload;
      })
      .catch((err) => {
        console.log(err);
        return {};
      });

    return res;
  }

  static async signUp(email: string, callback?: (res: any) => void) {
    console.log("file path: `apps/user-wed/src/services/auth/index.ts`")
    console.log({ email });
    const res = await fetcher
      .post(apiRoutes.auth.signUp, { email })
      .then((res) => {
        console.log(res.payload);
        callback?.(res.payload);
        return res.payload;
      })
      .catch((err) => {
        console.log(err);
        return {};
      });

    return res;
  }
}

export default AuthService;
