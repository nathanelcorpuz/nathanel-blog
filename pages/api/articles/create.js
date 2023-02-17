import connectMongo from "@/lib/utils/connectMongo";
import Article from "@/models/article";
import slug from "slug";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function handler(req, res) {
  try {
    await connectMongo();
    const article = req.body;
    const slug = slug(article.title);

    const newArticle = await Article.create({
      ...article,
      img: "",
      imgAlt: "placeholder image",
      dates: {
        published: new Date("December 20, 2022"),
        edited: null,
      },
    });

    // wip

    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
