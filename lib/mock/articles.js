import slug from "slug";
import { LoremIpsum } from "lorem-ipsum";
import { v4 as uuidv4 } from "uuid";
import { articles } from "./db";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export function generateMockArticles(numOfArticles) {
  let mockArticles = [];
  for (let i = 0; i < numOfArticles; i++) {
    const heading = lorem.generateWords(10);
    const mockArticle = {
      id: uuidv4(),
      slug: slug(heading),
      img: placeholder1,
      imgAlt: "image for placeholder 1",
      author: "Nathanel Corpuz",
      dates: {
        published: "2022-12-17",
        edited: "",
      },
      headline: {
        heading: heading,
        subheading: lorem.generateSentences(3),
      },
      sections: [
        {
          id: uuidv4(),
          type: "standard",
          content: {
            heading: lorem.generateWords(7),
            paragraphs: [
              {
                id: uuidv4(),
                text: lorem.generateSentences(4),
              },
            ],
          },
        },
        {
          id: uuidv4(),
          type: "numbered_list",
          content: {
            heading: lorem.generateWords(6),
            paragraphs: [
              {
                id: uuidv4(),
                text: lorem.generateSentences(2),
              },
              {
                id: uuidv4(),
                text: lorem.generateSentences(5),
              },
              {
                id: uuidv4(),
                text: lorem.generateSentences(3),
              },
            ],
            items: [
              {
                id: uuidv4(),
                heading: lorem.generateWords(5),
                paragraphs: [
                  {
                    id: uuidv4(),
                    text: lorem.generateSentences(4),
                  },
                  {
                    id: uuidv4(),
                    text: lorem.generateSentences(3),
                  },
                ],
              },
              {
                id: uuidv4(),
                heading: lorem.generateWords(5),
                paragraphs: [
                  {
                    id: uuidv4(),
                    text: lorem.generateSentences(4),
                  },
                ],
              },
              {
                id: uuidv4(),
                heading: lorem.generateWords(8),
                paragraphs: [
                  {
                    id: uuidv4(),
                    text: lorem.generateSentences(4),
                  },
                  {
                    id: uuidv4(),
                    text: lorem.generateSentences(4),
                  },
                  {
                    id: uuidv4(),
                    text: lorem.generateSentences(4),
                  },
                ],
              },
            ],
          },
        },
        {
          id: uuidv4(),
          type: "standard",
          content: {
            heading: lorem.generateWords(4),
            paragraphs: [
              {
                id: uuidv4(),
                text: lorem.generateSentences(4),
              },
              {
                id: uuidv4(),
                text: lorem.generateSentences(4),
              },
            ],
          },
        },
      ],
      summary: lorem.generateSentences(6),
      tags: [lorem.generateWords(1), lorem.generateWords(1)],
    };
    mockArticles = [...mockArticles, mockArticle];
  }
  return mockArticles;
}

export async function getArticles() {
  return articles;
}

export async function getArticle(slug) {
  const articles = await getArticles();
  return articles.find((article) => article.slug === slug);
}

export async function getCategoryArticles(category) {
  const articles = await getArticles();
  return articles.filter((article) => article.tags.includes(category));
}
