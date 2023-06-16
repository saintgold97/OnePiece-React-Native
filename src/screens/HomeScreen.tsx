import React from "react";
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from "react-native";
import ROUTES from "../navigation/routes";
import { CharacterScreenFC } from "../models/ScreenFC";

const HomeScreen: CharacterScreenFC<"Home"> = ({navigation}) => {

  const startAdventure = () => {
    navigation.navigate(ROUTES.CharacterStack);
  };

  return (
    <ImageBackground
      source={require("../../assets/one.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>One Piece Adventure</Text>
        <TouchableOpacity style={styles.button} onPress={startAdventure}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FA9500",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
