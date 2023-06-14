import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { Character } from "../models/character";
import { ip, local } from "../config/config";
export const urlCharacters = `http://${ip}/v1/characters`;


export const useCharacters = (props: {
  name?: string;
  role?: string;
  crew?: string;
}): [Character[]] => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const { name, role, crew } = props;

  useEffect(() => {
    setTimeout(() => {
      axios
        .get<Character>(`${urlCharacters}`)
        .then((response: AxiosResponse) => {
          setCharacters(response.data);
        })
        .catch((err:AxiosError) => {

          console.log(err.config);
        })
    }, 1000);
  }, [name, role, crew]);
  return [characters];
};
