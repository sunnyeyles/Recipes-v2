import { NextResponse } from "next/server";
import Recipe from "@/db-models/recipeModel";
import User from "@/db-models/userModel";
import { currentUser } from "@clerk/nextjs";

export const PUT = async (request: Request) => {
  try {
    const data = await request.json();

    const foundRecipe = await Recipe.find({
      _id: data?.id,
    });
    await Recipe.updateOne({ foundRecipe, liked: true });

    if (!foundRecipe) {
      return NextResponse.json({ message: "Recipe not found" });
    }

    return NextResponse.json({ message: "Recipe Liked" });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
