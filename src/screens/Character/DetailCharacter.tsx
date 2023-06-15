import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Text, TouchableOpacity } from "react-native";
import { MyCard } from "../../components/Card/MyCard";
import { urlCharacters } from "../../hooks/useCharacters";
import axios from "axios";
import { Character } from "../../models/character";
import { CharacterScreenFC } from "../../models/ScreenFC";
import DeleteCard from "../../components/DeleteButton/DeleteButton";

const DetailCharacter: CharacterScreenFC<"DetailCharacter"> = ({
  route,
  navigation,
}) => {
  const [characters, setCharacters] = useState<Character | null>(null);
  const { params } = route;
  const characterId = params?.characterId;

  useEffect(() => {
    axios.get<Character>(`${urlCharacters}/${characterId}`).then((response) => {
      setCharacters(response.data);
    });
  }, [characterId]);

  //Status Delete
  const [deleteStatus, setDeleteStatus] = useState("");
  const deleteCard = async () => {
    try {
      await axios.delete(`${urlCharacters}/${characterId}`);
      setDeleteStatus("Delete successful");
      navigation.replace("Characters");
    } catch (error) {
      setDeleteStatus("Error delete card");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{characters?.name}</Text>
      <View style={{ margin: 10 }}>
        {characters && (
          <MyCard
            style={styles.card}
            img={`${characters.urlImg}`}
            span1={"Role:"}
            text1={`${characters.role}`}
            span2={"Crews:"}
            text2={`${characters.crew}`}
            span3={"Fruit:"}
            text3={characters.fruit ? `${characters.fruit}` : "N/A"}
            span4="Size:"
            text4={characters.size}
            span5="Bounty:"
            text5={characters.bounty}
            span6="Age:"
            text6={characters.age}
          />
        )}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Characters")}
      >
        <Text style={styles.buttonText}>Return</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("EditCharacter", {
            characterId: characterId,
            item: characters ?? undefined,
          })
        }
      >
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <DeleteCard style={styles.button} handleDelete={deleteCard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C50A07",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
    fontWeight: "bold",
    color: "#FBFFFE",
  },
  card: {
    marginTop: -30,
    marginBottom: 0,
    padding: 16,
  },
  button: {
    backgroundColor: "#783F8E",
    borderRadius: 30,
    marginHorizontal: 10,
    paddingVertical: 2,
    marginVertical: 6,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#FBFFFE",
  },
});

export default DetailCharacter;
