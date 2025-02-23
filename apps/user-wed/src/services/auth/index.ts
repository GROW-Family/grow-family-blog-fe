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

  static async signIn(payload: { userName: string; password: string }) {
    const key = await this.getPublicKey();
    console.log("payload", {
      key,
      userName: payload.userName,
      password: payload.password,
    });

    const pw = AuthHelper.encryptBase64(payload.password, key);
    console.log("file path: `apps/user-wed/src/services/auth/index.ts`");
    console.log({ key, userName: payload.userName, password: pw });
    fetcher
      .post(apiRoutes.auth.signIn, { userName: payload.userName, password: pw })
      .then((res) => {
        console.log(res.payload);
        return res.payload;
      })
      .catch((err) => {
        console.log(err);
        return {};
      });

    return payload;
  }

  static async signUp(email: string, callback?: (res: any) => void) {
    console.log("file path: `apps/user-wed/src/services/auth/index.ts`");
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
