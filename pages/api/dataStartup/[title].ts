import { NextApiRequest, NextApiResponse } from "next";
import { TStartup } from "../../../interfaces/TStartup";
import { dataStartup } from "../../../json/startuppario";

type ResponseError = {
  message: string;
};

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<TStartup | ResponseError>
) {
  const { query } = req;
  const { id } = query;

  if (query.title) {
    const filtered = dataStartup.filter(
      (el) => el.title.replaceAll(" ", "-") === query.title
    );

    // User with id exists
    return filtered.length > 0
      ? res.status(200).json(filtered[0])
      : res.status(404).json({ message: `User with id: ${id} not found.` });
  }
}
