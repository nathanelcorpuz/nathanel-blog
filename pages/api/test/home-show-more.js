import connectMongo from "@/helpers/connectMongo";
import Article from "@/models/article";

export default async function handler(req, res) {
  await connectMongo();
  const initialAllCount = 10;
  const pageSize = 2; // Maximum number of posts to retrieve
  const page = +req.query.page || 1; // Current page number (default to 1)
  const startIndex =
    page === 1 ? initialAllCount : (page - 1) * pageSize + initialAllCount; // Start index of posts to retrieve
  const endIndex = startIndex + pageSize; // End index of posts to retrieve

  try {
    // Retrieve a limited number of posts from the database
    const articles = await Article.find().skip(startIndex).limit(pageSize);
    const totalArticles = await Article.countDocuments(); // Count the total number of articles

    console.log("\n\n");

    console.log("*** articles");
    console.log(articles);
    console.log("*** page");
    console.log(page);
    console.log("*** startIndex");
    console.log(startIndex);
    console.log("*** endIndex");
    console.log(endIndex);

    console.log("\n\n");

    // Set up the response object with the articles and pagination metadata
    const response = {
      articles,
      currentPage: page,
      totalPages: Math.ceil(totalArticles / pageSize),
    };

    // If there are more articles to show, include a 'next' link in the response
    if (endIndex < totalArticles) {
      response.next = {
        page: +page + 1,
        limit: pageSize,
      };
    }

    res.json(response); // Return the response as JSON
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  return;
}
