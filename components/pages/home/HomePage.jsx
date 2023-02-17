export default function HomePage({ articles = [] }) {
  const featured = articles[0];
  const latest = articles.slice(12);
  return (
    <div>
      <h1>Nathanel Corpuz Blog</h1>
      <section id="featured">
        <article></article>
      </section>
    </div>
  );
}
