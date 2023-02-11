import placeholder1 from "@/public/placeholder/placeholder-1.jpg";
import placeholder2 from "@/public/placeholder/placeholder-2.jpg";
import placeholder3 from "@/public/placeholder/placeholder-3.jpg";
import placeholder4 from "@/public/placeholder/placeholder-4.jpg";
import placeholder5 from "@/public/placeholder/placeholder-5.jpg";

const featured = {
  id: "article1",
  img: placeholder1,
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
    img: placeholder2,
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
    img: placeholder3,
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
    img: placeholder1,
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
    img: placeholder2,
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
    img: placeholder3,
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
    img: placeholder4,
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
    img: placeholder5,
    author: "Ava Riley",
    dateTime: "2022-06-02",
    dateString: "June 2, 2022",
    title: "Phasellus maximus luctus dui, vel hendrerit tortor lacinia in.",
    tags: ["Technical"],
    description:
      "Fusce eleifend nisi in volutpat laoreet. Fusce ac est metus. Phasellus aliquet gravida augue nec pretium. Morbi convallis urna at sapien volutpat eleifend. Fusce id urna quis leo tincidunt iaculis ac vel nibh. Sed ac leo suscipit, hendrerit lacus sit amet, mattis lectus.",
  },
];

export default function getArticles() {
  return {
    featured,
    latest,
    all,
  };
}
