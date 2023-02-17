import { Schema, model, models } from "mongoose";

const paragraphSchema = new Schema({
  text: String,
});

const itemSchema = new Schema({
  heading: { type: String, required: true },
  paragraphs: [paragraphSchema],
});

const contentSchema = new Schema({
  heading: { type: String, required: true },
  paragraphs: [paragraphSchema],
  items: [itemSchema],
});

const sectionSchema = new Schema({
  type: { type: String, required: true },
  content: contentSchema,
});

const articleSchema = new Schema({
  slug: String,
  img: String,
  imgAlt: String,
  author: { type: String, required: true },
  dates: {
    published: String,
    edited: String,
  },
  headline: {
    heading: { type: String, required: true },
    subheading: { type: String, required: true },
  },
  sections: [sectionSchema],
  summary: { type: String, required: true },
  tags: { type: [String], required: true },
});

const Article = models.Article || model("Article", articleSchema);

export default Article;
