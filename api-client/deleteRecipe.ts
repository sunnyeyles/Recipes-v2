import axios from 'axios'

export const deleteRecipe = async (_id: string) => {
  try {
    const response = await axios.delete('/api/delete-recipe', {
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
