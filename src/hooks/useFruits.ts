import { useState, useEffect } from "react";
import axios from "axios";
import { Fruit } from "../models/fruit";
export const urlFruits = "http://localhost:3001/v1/fruits";

export const useFruits = (props: {
  type?: string;
}): [Fruit[]] => {
  const [fruit, setFruit] = useState<Fruit[]>([]);
  const { type } = props;

  useEffect(() => {
    setTimeout(() => {
      axios
        .get<Fruit>(`${urlFruits}`)
        .then((response: any) => {
          setFruit(response.data);
          //console.log(response.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
  }, [type]);
  return [fruit];
};
