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
    let finalUrl = urlCharacters + "?";
    if (name) {
      finalUrl += "name=" + name + "&";
    }
    if (role) {
      finalUrl += "role=" + role + "&";
    }
    if (crew) {
      finalUrl += "crew=" + crew + "&";
    }
    setTimeout(() => {
      axios
        .get<Character>(`${finalUrl}`)
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
