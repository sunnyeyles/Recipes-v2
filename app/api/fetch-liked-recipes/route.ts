import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import Recipe from '@/db-models/recipeModel'
import User from '@/db-models/userModel'
import { RecipeType } from '@/types/mainTypes'

export const GET = async () => {
  const user = await currentUser()
  console.log(user)
  const foundUser = await User.findOne({ _id: user?.id })

  if (!foundUser) {
    console.error('User not found')
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }
  try {
    const likedRecipes = await Promise.all(
      foundUser.recipes.map(async (recipeRef: RecipeType) => {
        const recipe = await Recipe.find({ _id: recipeRef._id })
        if (recipe[0].liked === true) {
          return recipe[0]
        } else {
          return undefined
        }
      })
    )
    const filteredLikedRecipes = likedRecipes.filter((recipe) => {
      if (recipe !== undefined) {
        return recipe
      }
    })
    return NextResponse.json({
      filteredLikedRecipes,
    })
  } catch (error) {
    console.error('Error fetching liked recipes:', error)
    return NextResponse.json(
      { error: 'Error fetching liked recipes' },
      { status: 500 }
    )
  }
}
