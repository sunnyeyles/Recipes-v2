import User from "@/db-models/userModel";
import Recipe from "@/db-models/recipeModel";
import { currentUser } from "@clerk/nextjs";
import { RecipeType } from "@/types/mainTypes";

export const saveRecipeToDb = async (recipe: RecipeType) => {
  try {
    const user = await currentUser();
    console.log(user);
    const foundUser = await User.findOne({ _id: user?.id });
    if (foundUser) {
      const newRecipe = new Recipe(recipe);
      foundUser.recipes.push(newRecipe._id);
      await Promise.all([newRecipe.save(), foundUser.save()]);
      console.log("Recipe successfully saved");
      console.log("Recipe from the function: ", recipe);
    } else {
      console.log("User not found");
    }
  } catch (error) {
    console.error("Error saving recipe:", error);
  }
};
