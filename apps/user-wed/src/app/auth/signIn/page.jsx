import AuthLayout from "../../../layouts/AuthLayout";
import Login from "../../../modules/auth/signIn";

function SignIn() {
    return (
        <AuthLayout>
            <Login />
        </AuthLayout>
    )
}

export default SignIn;
