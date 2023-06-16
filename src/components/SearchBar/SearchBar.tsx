import { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";

type SearchProps = {
  onSearch: (searchText: string) => void;
  text:string
};

export const SearchBar = ({ onSearch, text }: SearchProps) => {
  const [textInInput, setTextInInput] = useState("");

  const handleChangeText = (text: string) => {
    setTextInInput(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={`Search ${text}`}
        onChangeText={handleChangeText}
        accessibilityLabel="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical:2,
    alignItems:"center",
    marginHorizontal:15,
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#C0C0C0",
    borderColor: "#C0C0C0",
    padding: 8,
    flex: 1,
  },
  button: {
    borderWidth: 1,
    backgroundColor: "#FA9500",
    color: "#C0C0C0",
    paddingVertical: 11,
    paddingHorizontal:5,
  },
});
