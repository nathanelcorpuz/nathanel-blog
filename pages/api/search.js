import connectMongo from "@/helpers/connectMongo";
import Article from "@/models/article";

export default async function handler(req, res) {
  await connectMongo();
  const query = req.query.q;
  const articles = await Article.find({
    $or: [
      { "headline.heading": { $regex: query, $options: "i" } },
      { "headline.subheading": { $regex: query, $options: "i" } },
      { tags: { $elemMatch: { $regex: query, $options: "i" } } },
    ],
  });

  res.status(200).json(articles);
}
