import connectMongo from "@/helpers/connectMongo";
import Article from "@/models/article";

export default async function handler(req, res) {
  await connectMongo();
  const articles = await Article.find({ tags: { $in: req.query.category } });
  res.status(200).json(articles);
}
