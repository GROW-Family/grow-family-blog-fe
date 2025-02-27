import { redirect } from "next/navigation";
import { appPaths } from "../../common/constants/appPaths";

export default function AccountIndex() {
  redirect(appPaths.account.profile);
}
