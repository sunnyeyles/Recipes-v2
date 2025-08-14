import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  try {
    const data = await req.json()
    const { recipeName, ingredients, steps, files } = data

    return NextResponse.json({ message: 'Recipe Added' })
  } catch {
    return NextResponse.json('Error', { status: 500 })
  }
}
