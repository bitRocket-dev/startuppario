// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mockData from "../../json/startuppario.json";
import { utilitySetQuery } from "../../utils/setQuery";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;
  const findDescription = mockData.find(
    (el) => utilitySetQuery(el.title) === query.title
  );
  res.status(200).json(findDescription);
};

export default handler;
