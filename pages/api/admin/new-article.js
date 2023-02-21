import jwt from "jsonwebtoken";
import connectMongo from "@/helpers/connectMongo";

export default async function handler(req, res) {
  await connectMongo();

  const token = req.headers.authorization.slice(7);

  const { isAdmin } = jwt.verify(token, process.env.ADMIN_SECRET);

  if (!isAdmin) {
    res.status(401).send("Unauthorized access");
  }

  res.status(200).send("success");
}
