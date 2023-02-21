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

const imageSchema = new Schema({
  key: { type: String, required: true },
  alt: { type: String, required: true },
  owner: { type: String, required: true },
  ownerUrl: { type: String, required: true },
});

const articleSchema = new Schema({
  slug: String,
  image: imageSchema,
  author: { type: String, required: true },
  dates: {
    published: Date,
    edited: Date,
  },
  headline: {
    heading: { type: String, required: true },
    subheading: { type: String, required: true },
  },
  sections: [sectionSchema],
  summary: { type: String, required: true },
  tags: { type: [String], required: true },
  isFeatured: { type: Boolean, default: false },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
});

const Article = models.Article || model("Article", articleSchema);

export default Article;
