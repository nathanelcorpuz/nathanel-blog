import { v4 as uuidv4 } from "uuid";

import placeholder1 from "@/public/placeholder/placeholder-1.jpg";
import placeholder2 from "@/public/placeholder/placeholder-2.jpg";
import placeholder3 from "@/public/placeholder/placeholder-3.jpg";
import placeholder4 from "@/public/placeholder/placeholder-4.jpg";
import placeholder5 from "@/public/placeholder/placeholder-5.jpg";
import placeholder6 from "@/public/placeholder/placeholder-6.jpg";
import placeholder7 from "@/public/placeholder/placeholder-7.jpg";
import placeholder8 from "@/public/placeholder/placeholder-8.jpg";
import placeholder9 from "@/public/placeholder/placeholder-9.jpg";
import placeholder10 from "@/public/placeholder/placeholder-10.jpg";
import placeholder11 from "@/public/placeholder/placeholder-11.jpg";
import placeholder12 from "@/public/placeholder/placeholder-12.jpg";
import placeholder13 from "@/public/placeholder/placeholder-13.jpg";
import placeholder14 from "@/public/placeholder/placeholder-14.jpg";
import placeholder15 from "@/public/placeholder/placeholder-15.jpg";

const testArticle = {
  id: uuidv4(),
  slug: "this-is-test-article-number-one",
  img: placeholder1,
  imgAlt: "image for placeholder 1",
  author: "Nathanel Corpuz",
  dates: {
    published: "2022-12-17",
    edited: "",
  },
  headline: {
    heading: "This is test article number one",
    subheading:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of Latin literature from 45 BC, making it over 2000 years old.",
  },
  sections: [
    {
      id: uuidv4(),
      type: "standard",
      content: {
        heading: "This is standard section, index 0",
        paragraphs: [
          {
            id: uuidv4(),
            text: "Standard section index 1. Nulla eleifend, lectus in tempus elementum, dui lorem commodo purus, a gravida tortor nibh quis ligula. Cras iaculis tellus a dui aliquet tincidunt.",
          },
        ],
      },
    },
    {
      id: uuidv4(),
      type: "list",
      content: {
        heading: "This is a list section, index 1",
        paragraphs: [
          {
            id: uuidv4(),
            text: "List section index 1, paragraph 0. Nulla eleifend, lectus in tempus elementum, dui lorem commodo purus, a gravida tortor nibh quis ligula. Cras iaculis tellus a dui aliquet tincidunt.",
          },
          {
            id: uuidv4(),
            text: "List section index 1, paragraph 1. Nulla eleifend, lectus in tempus elementum, dui lorem commodo purus, a gravida tortor nibh quis ligula. Cras iaculis tellus a dui aliquet tincidunt.",
          },
          {
            id: uuidv4(),
            text: "List section index 1, paragraph 2. Nulla eleifend, lectus in tempus elementum, dui lorem commodo purus, a gravida tortor nibh quis ligula. Cras iaculis tellus a dui aliquet tincidunt.",
          },
        ],
        items: [
          {
            id: uuidv4(),
            heading: "Item 0 for list section index 1",
            paragraphs: [
              {
                id: uuidv4(),
                text: "Paragraph 0, Item 0 for list section index 1. Nulla eleifend, lectus in tempus elementum, dui lorem commodo purus, a gravida tortor nibh quis ligula. Cras iaculis tellus a dui aliquet tincidunt.",
              },
              {
                id: uuidv4(),
                text: "Paragraph 1, Item 0 for list section index 1. Nulla eleifend, lectus in tempus elementum, dui lorem commodo purus, a gravida tortor nibh quis ligula. Cras iaculis tellus a dui aliquet tincidunt.",
              },
            ],
          },
          {
            id: uuidv4(),
            heading: "Item 1 for list section index 1",
            paragraphs: [
              {
                id: uuidv4(),
                text: "Paragraph 0, Item 1 for list section index 1. Nulla eleifend, lectus in tempus elementum, dui lorem commodo purus, a gravida tortor nibh quis ligula. Cras iaculis tellus a dui aliquet tincidunt.",
              },
            ],
          },
          {
            id: uuidv4(),
            heading: "Item 3 for list section index 2",
            paragraphs: [
              {
                id: uuidv4(),
                text: "Paragraph 0, Item 2 for list section index 1. Nulla eleifend, lectus in tempus elementum, dui lorem commodo purus, a gravida tortor nibh quis ligula. Cras iaculis tellus a dui aliquet tincidunt.",
              },
              {
                id: uuidv4(),
                text: "Paragraph 1, Item 2 for list section index 1. Nulla eleifend, lectus in tempus elementum, dui lorem commodo purus, a gravida tortor nibh quis ligula. Cras iaculis tellus a dui aliquet tincidunt.",
              },
              {
                id: uuidv4(),
                text: "Paragraph 2, Item 2 for list section index 1. Nulla eleifend, lectus in tempus elementum, dui lorem commodo purus, a gravida tortor nibh quis ligula. Cras iaculis tellus a dui aliquet tincidunt.",
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
        heading: "This is standard section, index 2",
        paragraphs: [
          {
            id: uuidv4(),
            text: "Standard section index 2, paragraph 0. Nulla eleifend, lectus in tempus elementum, dui lorem commodo purus, a gravida tortor nibh quis ligula. Cras iaculis tellus a dui aliquet tincidunt.",
          },
          {
            id: uuidv4(),
            text: "Standard section index 2, paragraph 1. Nulla eleifend, lectus in tempus elementum, dui lorem commodo purus, a gravida tortor nibh quis ligula. Cras iaculis tellus a dui aliquet tincidunt.",
          },
        ],
      },
    },
  ],
  summary:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  tags: ["business", "tips"],
};

export async function getTestArticle() {
  return testArticle;
}

const featured = {
  id: "article1",
  slug: "neque-porro-quisquam-consectetur-adipisci-velit",
  img: placeholder1,
  imgAlt: "image for placeholder 1",
  author: "Nathanel Corpuz",
  dateTime: "2022-10-15",
  dateString: "October 15, 2022",
  title: "Neque porro quisquam, consectetur, adipisci velit",
  tags: ["Tips", "Technical"],
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
};

const latest = [
  {
    id: "article2",
    slug: "lorem-ipsum-comes-from-sections-11032-and-11033-of-de-finibus-bonorum-et-malorum",
    img: placeholder2,
    imgAlt: "image for placeholder 2",
    author: "Kiera McKinney",
    dateTime: "2023-01-03",
    dateString: "January 3, 2023",
    title: `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
        Finibus Bonorum et Malorum"`,
    tags: ["Business", "Career"],
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: "article3",
    slug: "there-are-many-variations-of-passages-of-lorem-ipsum-available",
    img: placeholder3,
    imgAlt: "image for placeholder3",
    author: "Julianne Cox",
    dateTime: "2022-12-21",
    dateString: "December 21, 2022",
    title: "There are many variations of passages of Lorem Ipsum available",
    tags: ["Business", "Tips"],
    description:
      "Nulla eleifend, lectus in tempus elementum, dui lorem commodo purus, a gravida tortor nibh quis ligula. Cras iaculis tellus a dui aliquet tincidunt. In hac habitasse platea dictumst. Curabitur luctus dui in luctus pharetra.",
  },
];

const all = [
  {
    id: "article1",
    slug: "neque-porro-quisquam-consectetur-adipisci-velit",
    img: placeholder1,
    imgAlt: "image for placeholder 1",
    author: "Nathanel Corpuz",
    dateTime: "2022-10-15",
    dateString: "October 15, 2022",
    title: "Neque porro quisquam, consectetur, adipisci velit",
    tags: ["Tips", "Technical"],
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: "article2",
    slug: "lorem-ipsum-comes-from-sections-11032-and-11033-of-de-finibus-bonorum-et-malorum",
    img: placeholder2,
    imgAlt: "image for placeholder 2",
    author: "Kiera McKinney",
    dateTime: "2023-01-03",
    dateString: "January 3, 2023",
    title: `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
        Finibus Bonorum et Malorum"`,
    tags: ["Business", "Career"],
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: "article3",
    slug: "there-are-many-variations-of-passages-of-lorem-ipsum-available",
    img: placeholder3,
    imgAlt: "image for placeholder 3",
    author: "Julianne Cox",
    dateTime: "2022-12-21",
    dateString: "December 21, 2022",
    title: "There are many variations of passages of Lorem Ipsum available",
    tags: ["Business", "Tips"],
    description:
      "Nulla eleifend, lectus in tempus elementum, dui lorem commodo purus, a gravida tortor nibh quis ligula. Cras iaculis tellus a dui aliquet tincidunt. In hac habitasse platea dictumst. Curabitur luctus dui in luctus pharetra.",
  },
  {
    id: "article4",
    slug: "etiam-sem-felis-mollis-non-sagittis-vitae",
    img: placeholder4,
    imgAlt: "image for placeholder 4",
    author: "Alexander Chen",
    dateTime: "2022-08-09",
    dateString: "August 09, 2022",
    title: "Etiam sem felis, mollis non sagittis vitae",
    tags: ["Career"],
    description:
      "In viverra scelerisque ultricies. Donec at eros nec risus ullamcorper feugiat. In pharetra dolor diam, posuere mollis dolor cursus eget. Pellentesque vitae eleifend tortor.",
  },
  {
    id: "article5",
    slug: "phasellus-maximus-luctus-dui-vel-hendrerit-tortor-lacinia-in",
    img: placeholder5,
    imgAlt: "image for placeholder 5",
    author: "Ava Riley",
    dateTime: "2022-06-02",
    dateString: "June 2, 2022",
    title: "Phasellus maximus luctus dui, vel hendrerit tortor lacinia in.",
    tags: ["Technical"],
    description:
      "Fusce eleifend nisi in volutpat laoreet. Fusce ac est metus. Phasellus aliquet gravida augue nec pretium. Morbi convallis urna at sapien volutpat eleifend. Fusce id urna quis leo tincidunt iaculis ac vel nibh. Sed ac leo suscipit, hendrerit lacus sit amet, mattis lectus.",
  },
  {
    id: "article6",
    slug: "the-future-of-space-exploration",
    img: placeholder6,
    imgAlt: "Illustration of a spaceship in orbit around the moon",
    author: "James Lee",
    dateTime: "2023-01-15T10:30:00Z",
    dateString: "January 15, 2023",
    title: "The Future of Space Exploration",
    tags: ["Business", "Technical"],
    description:
      "Space exploration has come a long way since the first human landed on the moon. In this article, we take a look at the latest developments in space technology and what the future holds for space exploration.",
  },
  {
    id: "article7",
    slug: "the-art-of-meditation",
    img: placeholder7,
    imgAlt: "Illustration of a person meditating",
    author: "Samantha Smith",
    dateTime: "2022-11-01T15:45:00Z",
    dateString: "November 1, 2022",
    title: "The Art of Meditation",
    tags: ["Business"],
    description:
      "Meditation is a practice that has been around for centuries and has many benefits for our physical and mental health. In this article, we explore the different types of meditation, their benefits, and how to get started with your own meditation practice.",
  },
  {
    id: "article8",
    slug: "how-to-create-websites",
    img: placeholder8,
    imgAlt: "illustration of a person typing",
    author: "John Doe",
    dateTime: "2022-09-01T15:45:00Z",
    dateString: "September 1, 2022",
    title: "How to create websites",
    tags: ["Technical"],
    description:
      "Duis et justo tellus. Maecenas sit amet nunc porta, auctor enim vel, vestibulum nunc. Vestibulum aliquam id tortor sed lacinia. Mauris sit amet magna vel dui lobortis tristique.",
  },
  {
    id: "article9",
    slug: "the-power-of-positive-thinking",
    img: placeholder9,
    imgAlt: "Illustration of a person thinking positively",
    author: "Jane Smith",
    dateTime: "2022-10-15T10:30:00Z",
    dateString: "October 15, 2022",
    title: "The Power of Positive Thinking",
    tags: ["Self-Improvement"],
    description:
      "Positive thinking can have a profound impact on our lives, helping us overcome challenges and achieve our goals. In this article, we explore the benefits of positive thinking and provide tips for cultivating a more positive mindset.",
  },
  {
    id: "article10",
    slug: "the-impact-of-social-media-on-mental-health",
    img: placeholder10,
    imgAlt: "Illustration of a person using social media",
    author: "Jake Todd",
    dateTime: "2022-09-30T14:15:00Z",
    dateString: "September 30, 2022",
    title: "The Impact of Social Media on Mental Health",
    tags: ["Technology", "Mental Health"],
    description:
      "Social media has become a ubiquitous part of our lives, but it's important to understand the potential impact it can have on our mental health. In this article, we explore the ways in which social media can affect our well-being and offer strategies for managing its use.",
  },
  {
    id: "article11",
    slug: "the-benefits-of-yoga-for-physical-and-mental-health",
    img: placeholder11,
    imgAlt: "Illustration of a person doing yoga",
    author: "William Free",
    dateTime: "2022-08-23T11:00:00Z",
    dateString: "August 23, 2022",
    title: "The Benefits of Yoga for Physical and Mental Health",
    tags: ["Fitness", "Mental Health"],
    description:
      "Yoga is a popular form of exercise that has been shown to have numerous benefits for both our physical and mental health. In this article, we explore the ways in which yoga can improve our well-being and provide tips for getting started with a yoga practice.",
  },
];

const initialAll = [
  {
    id: "article1",
    slug: "neque-porro-quisquam-consectetur-adipisci-velit",
    img: placeholder1,
    imgAlt: "image for placeholder 1",
    author: "Nathanel Corpuz",
    dateTime: "2022-10-15",
    dateString: "October 15, 2022",
    title: "Neque porro quisquam, consectetur, adipisci velit",
    tags: ["Tips", "Technical"],
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: "article2",
    slug: "lorem-ipsum-comes-from-sections-11032-and-11033-of-de-finibus-bonorum-et-malorum",
    img: placeholder2,
    imgAlt: "image for placeholder 2",
    author: "Kiera McKinney",
    dateTime: "2023-01-03",
    dateString: "January 3, 2023",
    title: `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
        Finibus Bonorum et Malorum"`,
    tags: ["Business", "Career"],
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: "article3",
    slug: "there-are-many-variations-of-passages-of-lorem-ipsum-available",
    img: placeholder3,
    imgAlt: "image for placeholder 3",
    author: "Julianne Cox",
    dateTime: "2022-12-21",
    dateString: "December 21, 2022",
    title: "There are many variations of passages of Lorem Ipsum available",
    tags: ["Business", "Tips"],
    description:
      "Nulla eleifend, lectus in tempus elementum, dui lorem commodo purus, a gravida tortor nibh quis ligula. Cras iaculis tellus a dui aliquet tincidunt. In hac habitasse platea dictumst. Curabitur luctus dui in luctus pharetra.",
  },
  {
    id: "article4",
    slug: "etiam-sem-felis-mollis-non-sagittis-vitae",
    img: placeholder4,
    imgAlt: "image for placeholder 4",
    author: "Alexander Chen",
    dateTime: "2022-08-09",
    dateString: "August 09, 2022",
    title: "Etiam sem felis, mollis non sagittis vitae",
    tags: ["Career"],
    description:
      "In viverra scelerisque ultricies. Donec at eros nec risus ullamcorper feugiat. In pharetra dolor diam, posuere mollis dolor cursus eget. Pellentesque vitae eleifend tortor.",
  },
  {
    id: "article5",
    slug: "phasellus-maximus-luctus-dui-vel-hendrerit-tortor-lacinia-in",
    img: placeholder5,
    imgAlt: "image for placeholder 5",
    author: "Ava Riley",
    dateTime: "2022-06-02",
    dateString: "June 2, 2022",
    title: "Phasellus maximus luctus dui, vel hendrerit tortor lacinia in.",
    tags: ["Technical"],
    description:
      "Fusce eleifend nisi in volutpat laoreet. Fusce ac est metus. Phasellus aliquet gravida augue nec pretium. Morbi convallis urna at sapien volutpat eleifend. Fusce id urna quis leo tincidunt iaculis ac vel nibh. Sed ac leo suscipit, hendrerit lacus sit amet, mattis lectus.",
  },
  {
    id: "article6",
    slug: "the-future-of-space-exploration",
    img: placeholder6,
    imgAlt: "Illustration of a spaceship in orbit around the moon",
    author: "James Lee",
    dateTime: "2023-01-15T10:30:00Z",
    dateString: "January 15, 2023",
    title: "The Future of Space Exploration",
    tags: ["Business", "Technical"],
    description:
      "Space exploration has come a long way since the first human landed on the moon. In this article, we take a look at the latest developments in space technology and what the future holds for space exploration.",
  },
];

export async function getArticles() {
  return {
    featured,
    latest,
    initialAll,
    all,
  };
}

export async function getArticle({ slug }) {
  const articles = await getArticles();

  return articles.all.find((article) => article.slug === slug);
}

export async function getCategoryArticles({ category }) {
  const articles = await getArticles();
  return articles.all.filter((article) =>
    article.tags.map((tag) => tag.toLowerCase()).includes(category)
  );
}

export async function getSearchedArticles({ key }) {
  const articles = await getArticles();
  return articles.all;
}
