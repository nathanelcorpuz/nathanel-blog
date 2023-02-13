const main = {
  title: "links",
  links: [
    {
      title: "home",
      pathname: "/",
      hash: "#",
      externalUrl: "",
    },
    {
      title: "featured",
      pathname: "/",
      hash: "#featured",
      externalUrl: "",
    },
    {
      title: "latest",
      pathname: "/",
      hash: "#latest",
      externalUrl: "",
    },
    {
      title: "portfolio",
      pathname: "/",
      hash: "",
      externalUrl: "https://nathanelcorpuz.com",
    },
  ],
};

const categories = {
  title: "categories",
  links: [
    {
      title: "business",
      pathname: "/category/business",
      hash: "#",
      externalUrl: "",
    },
    {
      title: "tips",
      pathname: "/category/tips",
      hash: "#",
      externalUrl: "",
    },
    {
      title: "technical",
      pathname: "/category/technical",
      hash: "#",
      externalUrl: "",
    },
    {
      title: "career",
      pathname: "/category/career",
      hash: "#",
      externalUrl: "",
    },
  ],
};

export default function getFooterLinks() {
  return {
    main,
    categories,
  };
}
