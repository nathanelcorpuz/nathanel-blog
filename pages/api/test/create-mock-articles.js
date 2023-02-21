import connectMongo from "@/helpers/connectMongo";
import randomDate from "@/lib/utils/randomDate";
import Article from "@/models/article";
import { LoremIpsum } from "lorem-ipsum";
import slug from "slug";

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

export default async function handler(req, res) {
  await connectMongo();
  const { numOfArticles } = req.body;
  let mockArticles = [];
  for (let i = 0; i < numOfArticles; i++) {
    const heading = lorem.generateWords(7);
    const mockArticle = {
      slug: slug(heading),
      image: {
        key: "placeholder.jpg",
        alt: "clear wall with a hanging clock and a table with decorations",
        owner: "Samantha Gades",
        ownerUrl: "https://unsplash.com/@srosinger3997",
      },
      author: lorem.generateWords(2),
      dates: {
        published: randomDate({
          from: new Date("2020-01-01"),
          to: new Date("2023-05-30"),
        }),
      },
      headline: {
        heading,
        subheading: lorem.generateSentences(3),
      },
      sections: [
        {
          type: "standard",
          content: {
            heading: lorem.generateWords(7),
            paragraphs: [
              {
                text: lorem.generateSentences(4),
              },
            ],
          },
        },
        {
          type: "numbered_list",
          content: {
            heading: lorem.generateWords(6),
            paragraphs: [
              {
                text: lorem.generateSentences(2),
              },
              {
                text: lorem.generateSentences(5),
              },
              {
                text: lorem.generateSentences(3),
              },
            ],
            items: [
              {
                heading: lorem.generateWords(5),
                paragraphs: [
                  {
                    text: lorem.generateSentences(4),
                  },
                  {
                    text: lorem.generateSentences(3),
                  },
                ],
              },
              {
                heading: lorem.generateWords(5),
                paragraphs: [
                  {
                    text: lorem.generateSentences(4),
                  },
                ],
              },
              {
                heading: lorem.generateWords(8),
                paragraphs: [
                  {
                    text: lorem.generateSentences(4),
                  },
                  {
                    text: lorem.generateSentences(4),
                  },
                  {
                    text: lorem.generateSentences(4),
                  },
                ],
              },
            ],
          },
        },
        {
          type: "standard",
          content: {
            heading: lorem.generateWords(4),
            paragraphs: [
              {
                text: lorem.generateSentences(4),
              },
              {
                text: lorem.generateSentences(4),
              },
            ],
          },
        },
        {
          type: "bulleted_list",
          content: {
            heading: lorem.generateWords(6),
            paragraphs: [
              {
                text: lorem.generateSentences(2),
              },
              {
                text: lorem.generateSentences(3),
              },
            ],
            items: [
              {
                heading: lorem.generateWords(5),
                paragraphs: [
                  {
                    text: lorem.generateSentences(4),
                  },
                ],
              },
              {
                heading: lorem.generateWords(8),
                paragraphs: [
                  {
                    text: lorem.generateSentences(4),
                  },
                  {
                    text: lorem.generateSentences(4),
                  },
                  {
                    text: lorem.generateSentences(4),
                  },
                ],
              },
            ],
          },
        },
      ],
      summary: lorem.generateSentences(6),
      tags: [lorem.generateWords(1), lorem.generateWords(1)],
      likes: 3,
      dislikes: 3,
    };
    mockArticles = [...mockArticles, mockArticle];
  }

  await Article.insertMany(mockArticles);

  res.status(200).json(mockArticles);
}
