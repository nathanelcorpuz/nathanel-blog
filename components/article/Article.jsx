import Image from "next/image";

export default function Article({ article }) {
  const {
    img,
    alt = "placeholder image",
    author,
    dateString,
    dateTime,
    title,
    tags,
    description,
  } = article;
  return (
    <article>
      <Image src={img} width="250" alt={alt} />
      <hgroup>
        <div>
          <p>{author}</p>
          <time dateTime={dateTime}>{dateString}</time>
        </div>
        <h3>{title}</h3>
        <div>
          {tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
      </hgroup>
      <p>{description}</p>
    </article>
  );
}
