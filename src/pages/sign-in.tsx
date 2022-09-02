import { Helmet } from 'react-helmet';
import { lazy } from 'react';
import { trackPromise } from 'react-promise-tracker';

const SignIn = lazy(() => trackPromise(import('src/features/auth/components/form-sign-in')));

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
