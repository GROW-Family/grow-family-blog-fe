/* eslint-disable @nx/enforce-module-boundaries */
import fetcher from "userSrc/apis/fetcher";
import { apiRoutes } from "userSrc/apis/routes";
import Helper from "@helpers/helper";
import { IDataResponse } from "userSrc/apis/interfaces";
import Cookies from "js-cookie";

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
    const pw = Helper.encryptPkcs1Base64(payload.password, key);

    try {
      const res = await fetcher.post(apiRoutes.auth.signIn, {
        userName: payload.userName,
        password: pw,
      });
      return res.payload as IDataResponse<string>;
    } catch (err) {
      console.log(err);
      return {} as IDataResponse<string>;
    }
  }
  static async verifyEmail(email: string) {
    fetcher
      .post(apiRoutes.auth.verifyEmail, {
        email,
        apiKey: Helper.stringToBase64(process.env.NEX_PRIVATE_API_KEY ?? ""),
      })
      .then((res) => {
        return res.payload;
      })
      .catch((err) => {
        console.log(err);
        return {};
      });

    return email;
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

  static async forgotPassword(email: string) {
    console.log("file path: `apps/user-wed/src/services/auth/index.ts`");
    const apiKey = "JGdyb3ctZmFtaWx5LXRlYW0tMjAyNSQ=";
    const res = await fetcher
      .post(
        `${apiRoutes.auth.forgotPassword}?email=${email}&apiKey=${apiKey}`,
        email,
      )
      .then((res) => {
        console.log(res.payload);
        return res.payload;
      })
      .catch((err) => {
        console.log(err);
        return {};
      });
    return res;
  }

  static async getProfile(token: string) {
    try {
      const res = await fetcher.get(apiRoutes.auth.getProfile, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.payload;
    } catch (err) {
      console.error(err);
      return {};
    }
  }

  static async changePassword(userId: string, password: string) {
    console.log("file path: `apps/user-wed/src/services/auth/index.ts`");
    // Test
    const token = Cookies.get().token;
    // 
    const res = fetcher
      .put(
        apiRoutes.auth.changePassword,
        { userId, password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        console.log(res.payload);
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
