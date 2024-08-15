import axios from 'axios'
import { RecipeType } from '@/types/mainTypes'
export const createRecipeAndRetrieve = async (recipe: RecipeType) => {
  try {
    await axios.post('/api/save-user-recipe', {
      recipe: recipe,
    })
  } catch (error) {
    console.log(error)
  }
}
