import axios from 'axios'

export const fetchGeneratedRecipe = async (keyword: string) => {
  try {
    const response = await axios.post('/api/generate-ai-recipe', {
      data: keyword,
    })
    return response.data.data.message.content
  } catch (error) {
    console.error('error fetching or processing data:', error)
    return null
  }
}
