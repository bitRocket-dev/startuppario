import type { NextApiRequest, NextApiResponse } from "next";
import mockData from "../../json/startuppario.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(mockData);
}
