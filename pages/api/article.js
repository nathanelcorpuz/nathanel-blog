import createArticle from "@/helpers/createArticle";
import connectMongo from "@/helpers/connectMongo";
import Article from "@/models/article";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function handler(req, res) {
  await connectMongo();
  const { query, method, body } = req;
  switch (method) {
    case "POST":
      const newArticle = await createArticle(body);
      res.status(200).json(newArticle);
      break;
    case "GET":
      const article = await Article.findOne({ slug: query.slug });
      res.status(200).json(article);
      break;
  }
}
