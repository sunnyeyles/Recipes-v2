import { currentUser } from '@clerk/nextjs/server'
import { SignUp, SignIn } from '@clerk/nextjs'
import type { EmailAddress } from '@clerk/nextjs/server'
import { createNewUser } from '@/helpers/createNewUser'
import { Welcome } from '@/components/custom/welcome'
type ClerkUser = {
  id: string
  firstName?: string
  emailAddresses?: EmailAddress[]
}
const AuthenticateUser = async () => {
  const user = (await currentUser()) as ClerkUser
  if (!user) {
    return (
      <div>
        <SignUp />
      </div>
    )
  }
  createNewUser()

  return <Welcome name={user?.firstName || 'Guest'} />
}

export default AuthenticateUser
