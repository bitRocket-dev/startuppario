import { BASE_PATH } from "../../constants/general";
import { TWord } from "../../declaration/general";

const apiWordDetail = async (
  title: string | string[] | undefined
): Promise<TWord> => {
  const response = await fetch(`${BASE_PATH}/api/${title}`);
  return response.json();
};

export default apiWordDetail;
