import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import User from '@/db-models/userModel'
import Recipe from '@/db-models/recipeModel'
export const GET = async () => {
  try {
    const user = await currentUser()
    const foundUser = await User.findOne({ _id: user?.id })

    if (!foundUser) {
      console.error('User not found')
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const recipes = await Recipe.find({ _id: { $in: foundUser.recipes } })

    return NextResponse.json({
      user: foundUser,
      recipes: recipes,
    })
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong' })
  }
}
