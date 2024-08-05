import axios from 'axios'
import { RecipeType } from '@/types/mainTypes'
import { Types } from 'mongoose'

export const likeRecipe = async (_id: string) => {
  try {
    const response = await axios.put('/api/like-recipe', {
      data: {
        id: _id,
      },
    })
    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}
