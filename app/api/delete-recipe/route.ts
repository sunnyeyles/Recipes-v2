import { NextResponse } from "next/server";
import Recipe from "@/db-models/recipeModel";
export const DELETE = async (request: Request) => {
  try {
    const data = await request.json();
    const foundRecipe = await Recipe.findOne({ _id: data?.id });
    await Recipe.deleteOne(foundRecipe);
    return NextResponse.json({ message: "Recipe Deleted" });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
