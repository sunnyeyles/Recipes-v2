import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import OpenAI from "openai";
import mongoose from "mongoose";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
import Recipe from "@/db-models/recipeModel";
import User from "@/db-models/userModel";

export const POST = async (request: Request) => {
  try {
    const keyword = await request.json();

    // add a random token to the system message so that it doesn't give you the same recipe twice
    const randomToken = Math.random().toString(36).substring(7);
    const systemMessage = `Give me a recipe from the keyword ${keyword.data}, "Do not write anything like here is the recipe", just write the name of the recipe as the first key in the object, the ingredients as the second which will be an array of string, each string in the array being an ingredient and the method as the last key, method will also be an array of string, each string being a step. Each key will not be a string. for example-     recipe: {
      recipeName: "Chicken Drumsticks",
      ingredients: ["Chicken", "Flour", "Rosmary"],
      method: ["Heat pan", "Cook Chicken", "Wash up"]
    } Also do not add numbers. I want the object sent back as an object. If the keyword is not relevant to food, or is empty, just return a random recipe ${randomToken}`;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemMessage,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    return NextResponse.json({ data: completion.choices[0], request: keyword });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
