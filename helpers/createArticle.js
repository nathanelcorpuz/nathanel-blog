import Article from "@/models/article";
import slug from "slug";
import sanitizeArticle from "@/helpers/sanitizeArticle";

// multer
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/covers"); // Save images to the public/images folder
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// Route for handling image uploads
app.post("/api/upload/cover", upload.single("myImage"), async (req, res) => {
  try {
    const newDoc = new MyModel({
      title: req.body.title,
      imagePath: "/images/" + req.file.filename, // Store the relative path to the file in the Mongoose document
    });
    await newDoc.save();
    res.status(201).send(newDoc);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading file");
  }
});

export default async function createArticle(article) {
  const sluggedTitle = slug(article.headline.heading);
  const sanitizedArticle = sanitizeArticle(article);

  const newArticle = await Article.create({
    ...sanitizedArticle,
    slug: sluggedTitle,
    img: "",
    imgAlt: "placeholder image",
    dates: {
      published: new Date(article.dates.published),
      edited: null,
    },
  });

  return newArticle;
}
