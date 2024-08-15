import {
  S3Client,
  ListBucketsCommand,
  PutObjectCommand,
} from '@aws-sdk/client-s3'
const accessKey = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
export const clientS3 = new S3Client({
  region: 'eu-west-3',
  credentials: {
    accessKeyId: accessKey!,
    secretAccessKey: secretAccessKey!,
  },
})

// export const addObjectS3 = async () => {
//   console.log('cunt')
//   // the key is name which will be the name
//   const input = {
//     Bucket: 'foesbucket',
//     Key: 'test.txt',
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
// export const listAllBuckets = async () => {
//   try {
//     const data = await client.send(new ListBucketsCommand({}))
//     console.log(
//       'Buckets:',
//       data.Buckets?.map((bucket) => bucket.Name)
//     )
//   } catch (error) {
//     console.error('Error listing buckets:', error)
//   }
// }
