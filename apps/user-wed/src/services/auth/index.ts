/* eslint-disable @nx/enforce-module-boundaries */
import fetcher from "userSrc/apis/fetcher";
import { apiRoutes } from "userSrc/apis/routes";
import { hashPassword } from "userSrc/utils/authHelper";

export const signInService = async (
  payload: {
    username: string;
    password: string;
  },
  callback?: (res: any) => void,
) => {
  const pw = hashPassword(payload.password);
  const res = await fetcher
    .post(
      apiRoutes.auth.signIn,
      { username: payload.username, password: pw },
      {},
    )
    .then((res) => {
      callback?.(res);
      return res.payload ?? null;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });

  return res;
};
