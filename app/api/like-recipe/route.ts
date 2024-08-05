import { NextResponse } from 'next/server'
import Recipe from '@/db-models/recipeModel'

export const PUT = async (request: Request) => {
  try {
    const data = await request.json()
    const foundRecipe = await Recipe.find({ _id: data.data?.id })
    if (foundRecipe === null || foundRecipe === undefined) {
      return NextResponse.json({ message: 'Recipe not found' })
    }
    if (foundRecipe[0].liked === true) {
      await Recipe.findOneAndUpdate({ _id: data.data.id }, { liked: false })
    } else {
      await Recipe.findOneAndUpdate({ _id: data.data.id }, { liked: true })
    }

    return NextResponse.json({ message: 'Recipe Liked' })
  } catch (error) {
    console.error(error)
    throw error
  }
}
