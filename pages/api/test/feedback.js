import connectMongo from "@/helpers/connectMongo";
import Article from "@/models/article";

export default async function handler(req, res) {
  await connectMongo();
  const { id, isLiked } = req.body;
  if (isLiked) {
    await Article.findByIdAndUpdate(id, { $inc: { likes: 1 } });
  } else {
    await Article.findByIdAndUpdate(id, { $inc: { dislikes: 1 } });
  }
  res.status(200).send(true);
}
