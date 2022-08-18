import SignIn from "src/features/auth/components/form-sign-in";
import { Helmet } from "react-helmet";

const SignInPage = () => {
  return (
    <>
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <SignIn />
    </>
  );
};

export default SignInPage;
