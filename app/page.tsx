import Link from "next/link";
import { connectMongo } from "@/api-client/connectMongoDb";
import axios from "axios";
import { auth } from "@clerk/nextjs";
// Dummy Data

export default function Home() {
  connectMongo();
  const { userId } = auth();

  let href = userId ? "/recipes" : "/authenticate-user";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button>
        <Link href={href}>Home</Link>
      </button>
    </main>
  );
}
