import Article from "@/models/article";
import slug from "slug";
import sanitizeArticle from "@/helpers/sanitizeArticle";

export default async function createArticle(article) {
  const sluggedTitle = slug(article.headline.heading);
  const sanitizedArticle = sanitizeArticle(article);

  const newArticle = await Article.create({
    ...sanitizedArticle,
    slug: sluggedTitle,
    imgUrl: article.imgUrl,
    imgAlt: article.imgAlt,
    dates: {
      published: new Date(article.dates.published),
      edited: null,
    },
  });

  return newArticle;
}
