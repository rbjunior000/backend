import { getStarwarsCharacterService } from "./service";

export const getCharacter = async () => {
  try {
    const result = await getStarwarsCharacterService();
    return result;
  } catch (err) {
    throw err;
  }
};
