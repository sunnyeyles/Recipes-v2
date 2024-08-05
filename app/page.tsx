import Link from 'next/link'
import { connectMongo } from '@/helpers/connectMongoDb'
import axios from 'axios'
// import { auth } from "@clerk/nextjs";
import { Button } from '@/components/ui/button'
import { buttonVariants } from '@/components/ui/button'
import background from '../pattern-3289978_1920.png'
import Image from 'next/image'
import { Welcome } from '@/components/custom/welcome'
const Home = async () => {
  await connectMongo()
  // const { userId } = auth();

  // let href = userId ? "/recipes" : "/authenticate-user";
  let href = '/authenticate-user'
  return (
    <main>
      <Image
        className="opacity-10 relative h-screen w-full"
        src={background}
        alt="background"
      />
      <div className="absolute flex flex-col gap-6 justify-center items-center h-screen  top-0 left-0 right-0 bottom-0">
        <h1 className="text-xl">Welcome to Recipes</h1>
        <Button variant="outline">
          <Link href={href}>Get Started</Link>
        </Button>
      </div>
    </main>
  )
}
export default Home
