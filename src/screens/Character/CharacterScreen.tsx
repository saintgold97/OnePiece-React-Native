import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ListItem from "../../components/ListItem/ListItem";
import { useCharacters } from "../../hooks/useCharacters";
import { CharacterScreenFC } from "../../models/ScreenFC";
import { SearchBar } from "../../components/SearchBar/SearchBar";

const CharactersScreen: CharacterScreenFC<"Characters"> = ({
  navigation,
}) => {
  const [searchName, setSearchName] = useState("");
  const [characters] = useCharacters({
    name: searchName,
  });

  return (
    <View style={styles.container}>
      <View>
        <SearchBar text="Name" onSearch={setSearchName} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AddCharacter")}
        >
          <Text style={styles.buttonText}>Add Character</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <ListItem characters={characters} navigation={navigation} />
      </View>
    </View>
  );
};

export default CharactersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C50A07",
  },
  card: {
    flex:2,
    padding: 20,
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
