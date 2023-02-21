import authenticateAdmin from "@/helpers/private/authenticateAdmin";
import signToken from "@/helpers/private/signToken";

export default function handler(req, res) {
  const authenticated = authenticateAdmin(req.body);

  if (!authenticated) {
    res.status(401).send("Unauthorized access");
  }

  const token = signToken();

  res.status(200).send(token);
}
