import { BASE_PATH } from "../../constants/general";
import { TWord } from "../../declaration/general";

const apiWordList = async (): Promise<TWord[]> => {
  const response = await fetch(`${BASE_PATH}/api/requestTitleList`);
  return response.json();
};

export default apiWordList;
