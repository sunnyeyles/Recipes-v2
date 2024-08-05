import { NextResponse } from 'next/server'
import Recipe from '@/db-models/recipeModel'
import User from '@/db-models/userModel'
import { currentUser } from '@clerk/nextjs/server'

export const DELETE = async (request: Request) => {
  try {
    const data = await request.json()
    const user = await currentUser()

    await User.updateOne({ _id: user?.id }, { $pull: { recipes: data?.id } })

    const foundRecipe = await Recipe.findOneAndDelete({ _id: data?.id })

    if (!foundRecipe) {
      return NextResponse.json({ message: 'Recipe not found' })
    }

    return NextResponse.json({ message: 'Recipe Deleted' })
  } catch (error) {
    console.error(error)
    throw error
  }
}
