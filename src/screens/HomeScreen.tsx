import React from "react";
import { View , StyleSheet, Text} from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C50A07",
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
