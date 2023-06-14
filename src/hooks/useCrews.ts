import { useState, useEffect } from "react";
import axios from "axios";
import { Crew } from "../models/crew";
export const urlCrews = "http://localhost:3001/v1/crews";

export const useCrews = (props: {
  english_name?: string;
  romaji_name?: string;
}): [Crew[]] => {
  const [crews, setCrews] = useState<Crew[]>([]);
  const { english_name, romaji_name } = props;

  useEffect(() => {
    setTimeout(() => {
      axios
        .get<Crew>(`${urlCrews}`)
        .then((response: any) => {
          setCrews(response.data);
          //console.log(response.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
  }, [english_name, romaji_name]);
  return [crews];
};
