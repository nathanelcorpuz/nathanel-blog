import connectMongo from "@/helpers/connectMongo";
import verifyToken from "@/helpers/private/verifyToken";

export default async function handler(req, res) {
  await connectMongo();

  const token = req.headers.authorization.slice(7);

  const isAdmin = verifyToken(token);

  if (!isAdmin) {
    res.status(401).send("Unauthorized access");
  }

  res.status(200).send("success");
}
