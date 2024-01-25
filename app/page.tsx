import Link from "next/link";
import { connectMongo } from "@/api-client/connectMongoDb";
import axios from "axios";
import { auth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

const Home = async () => {
  await connectMongo();
  const { userId } = auth();

  let href = userId ? "/recipes" : "/authenticate-user";
  return (
    <main>
      <button>
        <Button asChild>
          <Link href={href}>Login</Link>
        </Button>
      </button>
    </main>
  );
};
export default Home;
