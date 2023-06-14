import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Text, TouchableOpacity } from "react-native";
import { MyCard } from "../../components/Card/MyCard";
import { urlCharacters, useCharacters } from "../../hooks/useCharacters";
import axios from "axios";
import { Character } from "../../models/character";
import ScreenFC, { CustomScreenFC } from "../../models/ScreenFC";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../models/RootStack";

type DetailCharacterScreenRouteProp = RouteProp<
  RootStackParamList,
  "DetailCharacter"
>;

const DetailCharacter: ScreenFC<"DetailCharacter"> = ({
  route,
  navigation,
}) => {
  const [characters, setCharacters] = useState<Character | null>(null);
  const { params } = route;
  const characterId = params?.characterId;
  const item = params?.item;

  useEffect(() => {
    axios.get<Character>(`${urlCharacters}/${characterId}`).then((response) => {
      setCharacters(response.data);
    });
  }, [characterId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{characters?.name}</Text>
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Characters")}
      >
        <Text style={styles.buttonText}>Return</Text>
      </TouchableOpacity>
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
    marginBottom: 10,
    padding:16
  },
  button: {
    backgroundColor: "#783F8E",
    borderRadius:30,  
  },
  buttonText:{
    textAlign:"center",
    fontSize:20,
    color:"#FBFFFE"
  }
});

export default DetailCharacter;
