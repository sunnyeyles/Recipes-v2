import axios from 'axios'
import { UUID, randomUUID } from 'crypto'
const extractRecipeSubstring = (dataString: string) => {
  const startIndex = dataString.indexOf('{')
  const endIndex = dataString.lastIndexOf('}')
  return dataString.substring(startIndex, endIndex + 1)
}

const parseRecipeObject = (recipeSubstring: string) => {
  try {
    return eval(`(${recipeSubstring})`)
  } catch (error) {
    console.error('Error parsing recipe string:', error)
    throw new Error('Failed to parse recipe string')
  }
}

export const fetchGeneratedRecipe = async (keyword: string) => {
  try {
    const response = await axios.post('/api/open-ai', {
      data: keyword,
    })

    const dataString = response?.data?.data?.message?.content

    if (!dataString) {
      console.error('Error: No recipe data found in the response')
      return null
    }

    const recipeSubstring = extractRecipeSubstring(dataString)
    const recipeObject = parseRecipeObject(recipeSubstring)
    const recipeObjectWithId = { ...recipeObject, id: randomUUID, liked: false }
    return recipeObjectWithId
  } catch (error) {
    console.error('Error fetching or processing data:', error)
    return null
  }
}
