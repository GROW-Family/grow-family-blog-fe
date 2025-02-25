import { redirect } from "next/navigation";
import { appPaths } from "../../common/constants/appPaths";

type Props = object;
const Index = async (props: Props) => {
  redirect(appPaths.auth.logIn);
};
export default Index;
