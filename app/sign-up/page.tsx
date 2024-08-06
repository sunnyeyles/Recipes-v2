import { SignUp } from '@clerk/nextjs'
const SignUpPage = () => {
  return (
    <div className="flex justify-center m-12">
      <SignUp afterSignUpUrl="/recipes" />
    </div>
  )
}
export default SignUpPage
