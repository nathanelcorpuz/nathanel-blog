import { getArticles } from "@/lib/mock/articles";

export default async function handler(req, res) {
  const { lastArticleId } = req.query;
  const { all } = await getArticles();
  const index = all.findIndex((article) => article.id === lastArticleId);
  const nextThreeArticles = all.slice(index + 1, index + 4);

  res.status(200).json(nextThreeArticles);
}
