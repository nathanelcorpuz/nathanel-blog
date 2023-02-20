import connectMongo from "@/helpers/connectMongo";
import Article from "@/models/article";

export default async function handler(req, res) {
  await connectMongo();
  const initialAllCount = 10;
  const pageSize = 2;
  const page = +req.query.page || 1;
  const startIndex =
    page === 1 ? initialAllCount : (page - 1) * pageSize + initialAllCount;
  const endIndex = startIndex + pageSize;

  try {
    const articles = await Article.find().skip(startIndex).limit(pageSize);
    const totalArticles = await Article.countDocuments();

    const response = {
      articles,
      currentPage: page,
      totalPages: Math.ceil(totalArticles / pageSize),
    };

    res.json(response); // Return the response as JSON
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  return;
}
