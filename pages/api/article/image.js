import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export default async function handler(req, res) {
  const { key } = req.query;

  try {
    const response = await s3.send(
      new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET,
        Key: key,
      })
    );

    res.setHeader("Content-Type", response.ContentType);
    res.setHeader("Cache-Control", "max-age=31536000");
    res.send(response.Body);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching image from S3");
  }
}
