import mongoose, { Schema } from "mongoose";
import { RecipeType } from "@/types/mainTypes";

mongoose.Promise = global.Promise;

const recipeSchema = new Schema<RecipeType>({
  recipeName: { type: String, required: true },
  ingredients: { type: [String], required: true },
  method: { type: [String], required: true },
});

const Recipe =
  mongoose.models.Recipe || mongoose.model<RecipeType>("Recipe", recipeSchema);

export default Recipe;
