import axios from "axios";
import { RecipeType } from "@/types/mainTypes";
import { Types } from "mongoose";

export const deleteRecipe = async (_id: string) => {
  try {
    const response = await axios.delete("/api/delete-recipe", {
      data: {
        id: _id,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
