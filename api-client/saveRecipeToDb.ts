// import User from "@/db-models/userModel";
// import Recipe from "@/db-models/recipeModel";
// import { currentUser } from "@clerk/nextjs";
// import { RecipeType } from "@/types/mainTypes";
// export const saveRecipeToDb = async (recipe: RecipeType) => {
//   try {
//     const user = await currentUser();
//     const foundUser = await User.findOne({ _id: user?.id });
//     const newRecipe = new Recipe(recipe);
//     await foundUser.recipes.push(newRecipe._id);
//     await newRecipe.save();
//     console.log("recipe successfully saved");
//     console.log("Recipe from broken function: ", recipe);
//   } catch (error) {
//     console.log(error);
//   }
// };
import User from "@/db-models/userModel";
import Recipe from "@/db-models/recipeModel";
import { currentUser } from "@clerk/nextjs";
import { RecipeType } from "@/types/mainTypes";

export const saveRecipeToDb = async (recipe: RecipeType) => {
  try {
    // Fetch current user
    const user = await currentUser();
    console.log(user);
    // Find the user in the database
    const foundUser = await User.findOne({ _id: user?.id });
    if (foundUser) {
      // Create a new recipe instance
      const newRecipe = new Recipe(recipe);
      // Link the recipe to the user
      foundUser.recipes.push(newRecipe._id);
      // Save the recipe and update the user
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
