import { Types } from "mongoose";
import { MouseEvent } from "react";
export type UserType = {
  _id: string;
  emailAddresses: object[];
  recipes: Types.ObjectId[];
};
export type RecipeType = {
  _id: Types.ObjectId;
  recipeName: string;
  ingredients: [];
  method: [];
  liked?: boolean;
  likeRecipe?: (event: MouseEvent<HTMLButtonElement>) => void;
  deleteRecipe?: (event: MouseEvent<HTMLButtonElement>) => void;
};
