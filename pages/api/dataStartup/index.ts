import { NextApiResponse, NextApiRequest } from "next";
import { TStartup } from "../../../interfaces/TStartup";
import { dataStartup } from "../../../json/startuppario";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<TStartup[]>
) {
  return res.status(200).json(dataStartup);
}
