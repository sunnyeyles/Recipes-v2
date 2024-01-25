import mongoose, { Schema } from 'mongoose'
import { UserType } from '@/types/mainTypes'

mongoose.Promise = global.Promise

const userSchema = new Schema<UserType>({
  _id: { type: String, required: true },
  emailAddresses: { type: [Object], required: true },
  recipes: { type: [Schema.Types.ObjectId], required: true },
})

const User =
  mongoose.models.User || mongoose.model<UserType>('User', userSchema)

export default User
