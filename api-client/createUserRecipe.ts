import axios from 'axios'
import { TUserRecipeType } from '@/types/mainTypes'
import { RecipeType } from '@/types/mainTypes'
import os from 'os'

export const createRecipeAndRetrieve = async (recipe: TUserRecipeType) => {
  try {
    await axios.post(
      '/api/add-user-recipe',
      {
        recipe: recipe,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
  } catch (error) {
    console.log(error)
  }
}
