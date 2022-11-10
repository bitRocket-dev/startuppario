// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import jsonData from "../../json/startuppario.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;
  const findDescription = jsonData.find(
    (el) => el.title.replaceAll(" ", "-") === query.title
  );
  res.status(200).json(findDescription);
}
