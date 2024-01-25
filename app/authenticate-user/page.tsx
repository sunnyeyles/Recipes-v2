import { auth, currentUser } from "@clerk/nextjs";
import User from "@/db-models/userModel";
import { redirect } from "next/navigation";
import { connectMongo } from "@/api-client/connectMongoDb";
const runAuthenticate = async () => {
  try {
    const user = await currentUser();
    console.log("This is the signed in user: ", user);
    const match = await User.findOne({ _id: user?.id });
    console.log("This is the user found in the db: ", match);

    if (!match) {
      const newUser = {
        _id: user?.id,
        emailAddresses: user?.emailAddresses,
      };
      await User.create(newUser);
      console.log("New user created");
    }
  } catch (error) {
    console.error("Error in API handler:", error);
    throw new Error();
  }
  redirect("/recipes");
};

const AuthenticateUser = async () => {
  console.log("creating user");
  await runAuthenticate();
  return <div>Loading</div>;
};

export default AuthenticateUser;
