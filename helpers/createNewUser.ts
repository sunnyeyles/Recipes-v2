import { currentUser } from "@clerk/nextjs/server";
import User from "@/db-models/userModel";
export const createNewUser = async () => {
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
    console.error("something went wrong:", error);
    throw new Error();
  }
};
