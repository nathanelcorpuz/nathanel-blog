import Link from "next/link";

export default function CustomLink({ link }) {
  return link.externalUrl ? (
    <a
      href={link.externalUrl + link.pathname + link.hash}
      rel="noreferrer"
      target="_blank"
    >
      {link.title}
    </a>
  ) : (
    <Link
      scroll={link.hash === "#"}
      href={link.hash !== "#" ? `${link.pathname}${link.hash}` : link.pathname}
    >
      {link.title}
    </Link>
  );
}
