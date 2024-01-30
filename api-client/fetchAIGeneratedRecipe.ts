import axios from "axios";
const extractRecipeSubstring = (dataString: string) => {
  const startIndex = dataString.indexOf("{");
  const endIndex = dataString.lastIndexOf("}");
  return dataString.substring(startIndex, endIndex + 1);
};

const parseRecipeObject = (recipeSubstring: string) => {
  try {
    return eval(`(${recipeSubstring})`);
  } catch (error) {
    console.error("Error parsing recipe string:", error);
    throw new Error("Failed to parse recipe string");
  }
};

export const fetchGeneratedRecipe = async (keyword: string) => {
  try {
    const response = await axios.post("/api/generate-ai-recipe", {
      data: keyword,
    });

    return response.data.data.message.content;
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    return null;
  }
};
