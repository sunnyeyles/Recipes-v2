import { currentUser } from '@clerk/nextjs/server'
import { SignIn } from '@clerk/nextjs'
import type { EmailAddress } from '@clerk/nextjs/server'
import { createNewUser } from '@/helpers/createNewUser'
import { Welcome } from '@/components/custom/welcome'
type ClerkUser = {
  id: string
  firstName?: string
  emailAddresses?: EmailAddress[]
}
// create the user as soon as they log in so they can already start using the app
const AuthenticateUser = async () => {
  const user = (await currentUser()) as ClerkUser
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <SignIn />
      </div>
    )
  }
  await createNewUser(), 2000

  return <Welcome name={user?.firstName || 'Guest'} />
}

export default AuthenticateUser
