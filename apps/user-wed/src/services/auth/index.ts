/* eslint-disable @nx/enforce-module-boundaries */
import fetcher from "userSrc/apis/fetcher";
import { apiRoutes } from "userSrc/apis/routes";
import { hashPassword } from "userSrc/utils/authHelper";

export const signInService = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const pw = hashPassword(password);
  const res = await fetcher
    .post(apiRoutes.auth.signIn, { username, password: pw }, {})
    .then((res) => {
      return res.payload ?? null;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });

  return res;
};
