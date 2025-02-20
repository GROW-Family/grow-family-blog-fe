import { redirect } from 'next/navigation';

type Props = object
const Index = async (props: Props) => {
  redirect('/auth/signIn')
}
export default Index
