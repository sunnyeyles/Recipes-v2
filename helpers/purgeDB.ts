import Recipe from "@/db-models/recipeModel";
export const purgeDB = async () => {
  await Recipe.deleteMany({});
  console.log("Database purged");
};
