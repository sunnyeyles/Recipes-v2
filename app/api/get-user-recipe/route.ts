import { NextResponse } from 'next/server'
import Recipe from '@/db-models/recipeModel'
import User from '@/db-models/userModel'
import { currentUser } from '@clerk/nextjs/server'
import '../../../pattern-3289978_1920.png'
import os from 'os'
import fs from 'fs'
import path from 'path'
// console.log(os.platform())
// console.log('something')
// import {
//   S3Client,
//   ListBucketsCommand,
//   PutObjectCommand,
// } from '@aws-sdk/client-s3'
// const accessKey = process.env.AWS_ACCESS_KEY
// const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
// const client = new S3Client({
//   region: 'eu-west-3',
//   credentials: {
//     accessKeyId: accessKey!,
//     secretAccessKey: secretAccessKey!,
//   },
// })

// export const addObjectS3 = async () => {
//   // the key is name which will be the name
//   const input = {
//     Bucket: 'foesbucket',
//     Key: 'test',
//     Body: './pattern-3289978_1920.png',
//   }
//   try {
//     const command = new PutObjectCommand(input)
//     const response = await client.send(command)
//     console.log('Object added successfully:', response)
//   } catch (error) {
//     console.error('Error adding object:', error)
//   }
// }

// export const GET = async (request: Request, response: Response) => {
//   try {
//     // const data = await request.json()
//     const filePath = path.join(
//       'https://foesbucket.s3.eu-west-3.amazonaws.com',
//       'test.txt'
//     )
//     const fileBuffer = fs.readFileSync(filePath)
//     return new NextResponse(fileBuffer, {
//       headers: { 'Content-Type': 'text/plain' },
//     })

//     return NextResponse.json({ message: 'Recipe Added' })
//   } catch (error) {
//     console.error(error)
//     throw error
//   }
// }
const imageURL =
  'https://foesbucket.s3.eu-west-3.amazonaws.com/icons8-favorite-32.png'

export const POST = async (req: Request) => {
  try {
    const data = await req.json()
    const { recipeName, ingredients, steps, files } = data

    return NextResponse.json({ message: 'Recipe Added' })
  } catch {
    return NextResponse.json('Error', { status: 500 })
  }
}
