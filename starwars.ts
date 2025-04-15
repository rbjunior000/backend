import axios from "axios";

type Character = {
  id: number;
  name: string;
  height: number;
  mass: number;
  gender: "male" | "female" | string;
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
  formerAffiliations: string[];
};

export const getStarwarsCharacter = async (): Promise<Character[]> => {
  const result = await axios.get<Character[]>(
    "https://akabab.github.io/starwars-api/api/all.json"
  );
  return result.data;
};
