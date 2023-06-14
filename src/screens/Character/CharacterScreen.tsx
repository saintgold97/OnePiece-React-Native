import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ListItem from "../../components/ListItem/ListItem";
import { useCharacters } from "../../hooks/useCharacters";
import { CustomScreenFC } from "../../models/ScreenFC";

const CharactersScreen: CustomScreenFC<"Characters"> = ({ navigation }) => {
  const [characters] = useCharacters({});

  return (
    <View style={styles.container}>
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
    padding: 20,
  },
});
