import DOMPurify from "isomorphic-dompurify";

export default function sanitizeArticle(article) {
  const sanitizedSubheading = DOMPurify.sanitize(article.headline.subheading);
  const sanitizedSections = article.sections.map((section) => {
    const paragraphSanitizer = (paragraph) => ({
      text: DOMPurify.sanitize(paragraph.text),
    });
    if (section.items) {
      return {
        ...section,
        content: {
          ...section.content,
          paragraphs: section.content.paragraphs.map(paragraphSanitizer),
          items: items.map((item) => ({
            ...item,
            paragraphs: item.paragraphs.map(paragraphSanitizer),
          })),
        },
      };
    }
    return {
      ...section,
      content: {
        ...section.content,
        paragraphs: section.content.paragraphs.map(paragraphSanitizer),
      },
    };
  });

  const articleClone = JSON.parse(JSON.stringify(article));

  return {
    ...articleClone,
    headline: {
      heading: articleClone.headline.heading,
      subheading: sanitizedSubheading,
    },
    sections: sanitizedSections,
  };
}
