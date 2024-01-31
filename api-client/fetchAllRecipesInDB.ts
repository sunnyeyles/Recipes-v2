import axios from "axios";
export const fetchAllRecipesInDB = async () => {
  try {
    const data = await axios.get("api/fetch-recipes-from-db", {});
    return data;
  } catch (error) {
    console.log(error);
  }
};
