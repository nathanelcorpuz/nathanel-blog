import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
const s3 = new S3Client({ region: "ap-northeast-1" });

export default async function getS3Image(Key) {
  const params = { Bucket: "nathanel-blog-assets", Key };
  const command = new GetObjectCommand(params);
  const response = await s3.send(command);
  return response.Body;
}
