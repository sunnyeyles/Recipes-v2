import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return <SignIn afterSignUpUrl="/recipes" redirectUrl="/recipes" />;
};
export default SignInPage;
