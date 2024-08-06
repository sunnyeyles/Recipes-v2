import axios from 'axios'
import { RecipeType } from '@/types/mainTypes'
import { useEffect } from 'react'
export const createRecipeAndRetrieve = async (recipe: RecipeType) => {
  try {
    await axios.put('/save-generated-recipe', {
      recipe: recipe,
    })
  } catch (error) {
    console.log(error)
  }
}
