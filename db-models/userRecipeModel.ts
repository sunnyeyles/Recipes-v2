import mongoose, { Schema } from 'mongoose'

type TUserRecipeType = {
  recipeName: string
  ingredients: { ingredient: string; amount: string }[]
  steps: {
    step: string
  }[]
  files: File[] | null
}

mongoose.Promise = global.Promise

const userRecipeSchema = new Schema<TUserRecipeType>({
  recipeName: { type: String, required: true },
  ingredients: [
    {
      ingredient: { type: String, required: true },
      amount: { type: String, required: true },
    },
  ],
  steps: [{ step: { type: String, required: true } }],
  files: [Schema.Types.Mixed],
})

const UserRecipe =
  mongoose.models.Recipe ||
  mongoose.model<TUserRecipeType>('UserRecipe', userRecipeSchema)

export default UserRecipe
