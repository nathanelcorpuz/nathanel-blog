import Article from "@/models/article";

export default async function getRelated(activeArticle) {
  const articles = await getRelatedArticles(activeArticle.tags);

  const flattenedArticles = articles.flat();

  const uniqueArticles = [
    ...new Set(flattenedArticles.map((article) => article._id.toString())),
  ].map((id) =>
    flattenedArticles.find((article) => article._id.toString() === id)
  );

  const filteredArticles = uniqueArticles.filter(
    (article) => article._id.toString() !== activeArticle._id.toString()
  );

  return filteredArticles;
}

async function getRelatedArticles(tags) {
  return Promise.all(tags.map(findArticleMapper));
}

async function findArticleMapper(tag) {
  return Article.find({ tags: { $elemMatch: { $regex: tag, $options: "i" } } });
}
