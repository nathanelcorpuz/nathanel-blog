/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

import connectMongo from "@/helpers/connectMongo";
import Article from "@/models/article";

export default async function handler(req, res) {
  await connectMongo();
  const featured = await Article.findOne({ isFeatured: true });
  const latest = await Article.find().limit(3).sort({ "dates.published": -1 });
  const all = await Article.find().limit(10);
  const articles = { featured, latest, all };
  res.status(200).json(articles);
}
