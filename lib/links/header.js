const main = [
  {
    title: "home",
    pathname: "/",
    hash: "#",
    externalUrl: "",
  },
  {
    title: "latest",
    pathname: "/",
    hash: "#latest",
    externalUrl: "",
  },
  {
    title: "all",
    pathname: "/",
    hash: "#all",
    externalUrl: "",
  },
  {
    title: "portfolio",
    pathname: "/",
    hash: "",
    externalUrl: "https://nathanelcorpuz.com",
  },
];

export default function getHeaderLinks() {
  return {
    main,
  };
}
