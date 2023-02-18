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
    const sluggedTitle = slug(article.headline.heading);

    const newArticle = await Article.create({
      ...article,
      slug: sluggedTitle,
      img: "",
      imgAlt: "placeholder image",
      dates: {
        published: new Date("December 20, 2022"),
        edited: null,
      },
    });

    res.status(200).json(newArticle);
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
