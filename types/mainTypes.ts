import { Types } from 'mongoose'

export type UserType = {
  _id: string
  emailAddresses: object[]
  recipes: Types.ObjectId[]
}
export type RecipeType = {
  _id: Types.ObjectId
  recipeName: string
  ingredients: []
  method: []
}
