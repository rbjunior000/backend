import { getStarwarsCharacter } from "./starwars";

type Character = {
  id: number;
  name: string;
  height: number;
  mass: number;
  gender: string;
  homeworld: string;
  wiki: string;
  image: string;
  born: number;
  bornLocation: string;
  died: number;
  diedLocation: string;
  species: string;
  hairColor: string;
  eyeColor: string;
  skinColor: string;
  cybernetics: string;
  affiliations: string[];
  masters: string[];
  apprentices: string[];
};

type GetStarwarsCharacterOutput = Character[];

export const getStarwarsCharacterService =
  async (): Promise<GetStarwarsCharacterOutput> => {
    const result = await getStarwarsCharacter();
    return result
  };
