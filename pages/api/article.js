import createArticle from "@/helpers/createArticle";
import connectMongo from "@/helpers/connectMongo";
import Article from "@/models/article";
import getRelated from "@/helpers/getRelated";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function handler(req, res) {
  await connectMongo();
  const { query, method, body } = req;
  try {
    switch (method) {
      case "POST":
        const newArticle = await createArticle(body);
        res.status(200).json(newArticle);
        break;
      case "GET":
        const article = await Article.findOne({ slug: query.slug });
        const related = await getRelated(article);
        res.status(200).json({ article, related });
        break;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
}
