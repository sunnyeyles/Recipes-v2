import { SignUp } from "@clerk/nextjs";
const SignUpPage = () => {
  return <SignUp afterSignUpUrl="/recipes" redirectUrl="/recipes" />;
};
export default SignUpPage;
