import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import mongoose from 'mongoose'
import { currentUser } from '@clerk/nextjs/server'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})
import Recipe from '@/db-models/recipeModel'
import User from '@/db-models/userModel'

export const POST = async (request: Request) => {
  let keyword, completion, recipeObject, newRecipe

  try {
    const keyword = await request.json()

    // adds some randomness to make sure duplicate recipes are not returned
    const randomToken = Math.random().toString(36).substring(7)
    const systemMessage = `
      Give me a recipe from the keyword "${keyword.data}". Respond with an object containing the following structure(json):
      
      {
        "recipeName": "Name of the Recipe",
        "ingredients": ["Ingredient 1", "Ingredient 2", ...],
        "method": ["Step 1", "Step 2", ...]
      }
      
      Do not include numbers, and avoid any additional text or formatting. If the keyword is not relevant to food or is empty, return a random recipe ${randomToken}.
    `

    completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: systemMessage,
        },
      ],
      model: 'gpt-3.5-turbo',
    })
  } catch (error) {
    console.error('error requesting recipe from OpenAI:', error)
    return NextResponse.json(
      { error: 'internal server error' },
      { status: 500 }
    )
  }

  try {
    // get the current user from the db
    const user = await currentUser()
    const foundUser = await User.findOne({ _id: user?.id })

    if (!foundUser) {
      console.error('User not found')
      return NextResponse.json({ error: 'user not found' }, { status: 404 })
    }

    const recipeReturned = completion.choices[0].message.content

    if (recipeReturned !== null && recipeReturned !== undefined) {
      try {
        recipeObject = JSON.parse(recipeReturned)
      } catch (error) {
        console.error('error parsing JSON:', error)
        return NextResponse.json(
          { error: 'error parsing JSON' },
          { status: 500 }
        )
      }
    }
    // create new recipe recipe object to put in the db
    newRecipe = new Recipe({
      _id: new mongoose.Types.ObjectId(),
      recipeName: recipeObject.recipeName,
      ingredients: recipeObject.ingredients,
      method: recipeObject.method,
      liked: false,
    })
    await Recipe.create(newRecipe)

    // update the user entry with the newly generated recipe
    foundUser.recipes.push(newRecipe)
    await foundUser.save()

    return NextResponse.json({
      data: completion.choices[0],
      request: keyword,
    })
  } catch (error) {
    console.error('error adding recipe to user:', error)
    return NextResponse.json(
      { error: 'internal server error' },
      { status: 500 }
    )
  }
}
