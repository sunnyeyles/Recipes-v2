import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <div className="flex justify-center m-12">
      <SignIn afterSignUpUrl="/recipes" />
    </div>
  )
}
export default SignInPage
