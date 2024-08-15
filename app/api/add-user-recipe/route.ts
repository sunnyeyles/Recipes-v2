import User from '@/db-models/userModel'
import UserRecipe from '@/db-models/userRecipeModel'
import { currentUser } from '@clerk/nextjs/server'
import { TUserRecipeType } from '@/types/mainTypes'

export const saveUserRecipe = async (userRecipe: TUserRecipeType) => {
  try {
    const user = await currentUser()
    const foundUser = await User.findOne({ _id: user?.id })
    if (foundUser) {
      const newRecipe = new UserRecipe(userRecipe)
      await foundUser.recipes.push(newRecipe._id)
      await newRecipe.save()
      // await
    } else {
      console.log('User not found')
    }
  } catch (error) {
    console.error('Error saving recipe:', error)
  }
}
