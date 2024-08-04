import { currentUser } from "@clerk/nextjs";
import User from "@/db-models/userModel";
import { redirect } from "next/navigation";
const runAuthenticate = async () => {
  const user = await currentUser();
  const match = await User.findOne({ _id: user?.id });
  try {
    if (!match) {
      const newUser = {
        _id: user?.id,
        emailAddresses: user?.emailAddresses,
      };
      await User.create(newUser);
    }
  } catch (error) {
    console.error("Error in API handler:", error);
    throw new Error();
  }
  redirect("/recipes");
};

const AuthenticateUser = async () => {
  await runAuthenticate();
  return <div>Loading</div>;
};

export default AuthenticateUser;
