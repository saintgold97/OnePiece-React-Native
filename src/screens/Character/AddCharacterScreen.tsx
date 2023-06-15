import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { CharacterScreenFC } from "../../models/ScreenFC";
import { Character } from "../../models/character";
import axios from "axios";
import { urlCharacters } from "../../hooks/useCharacters";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const AddCharacterScreen: CharacterScreenFC<"AddCharacter"> = ({
  navigation,
}) => {
  const [add, setAdd] = useState<Character>({
    _id: "",
    name: "",
    role: "",
    size: "",
    age: 0,
    bounty: "",
    fruit: "",
    crew: "",
    urlImg: "",
  });
  const [addSuccess, setAddSuccess] = useState(false);

  const handleSuccess = () => {
    navigation.replace("Characters");
  };

  const addCard = async () => {
    if (
      add.name === "" &&
      add.role === "" &&
      add.size === "" &&
      add.age === Number("") &&
      add.bounty === "" &&
      add.crew === ""
    ) {
      Alert.alert("Validation Error", "Please fill in all required fields.");
      return;
    } else {
      try {
        await axios.post(`${urlCharacters}`, add);
        setAdd(add);
        setAddSuccess(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.add}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={add.name}
          onChangeText={(text) => {
            setAdd((prev) => ({
              ...prev,
              name: text,
            }));
          }}
        />
      </View>
      <View style={styles.add}>
        <Text style={styles.label}>Role</Text>
        <TextInput
          style={styles.input}
          value={add.role}
          onChangeText={(text) => {
            setAdd((prev) => ({
              ...prev,
              role: text,
            }));
          }}
          
        />
      </View>
      <View style={styles.add}>
        <Text style={styles.label}>Crews</Text>
        <TextInput
          style={styles.input}
          value={add.crew}
          onChangeText={(text) => {
            setAdd((prev) => ({
              ...prev,
              crew: text,
            }));
          }}
        />
      </View>
      <View style={styles.add}>
        <Text style={styles.label}>Fruit</Text>
        <TextInput
          style={styles.input}
          value={add.fruit}
          onChangeText={(text) => {
            setAdd((prev) => ({
              ...prev,
              fruit: text,
            }));
          }}
          placeholder="Not necessary"
        />
      </View>
      <View style={styles.add}>
        <Text style={styles.label}>Size</Text>
        <TextInput
          style={styles.input}
          value={add.size}
          onChangeText={(text) => {
            setAdd((prev) => ({
              ...prev,
              size: text,
            }));
          }}
        />
      </View>
      <View style={styles.add}>
        <Text style={styles.label}>Bounty</Text>
        <TextInput
          style={styles.input}
          value={add.bounty}
          onChangeText={(text) => {
            setAdd((prev) => ({
              ...prev,
              bounty: text,
            }));
          }}
        />
      </View>
      <View style={styles.add}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          value={add.age?.toString()}
          onChangeText={(text) => {
            const number = parseInt(text);
            setAdd((prev) => ({
              ...prev,
              age: isNaN(number) ? 0 : number,
            }));
          }}
        />
      </View>
      <View style={styles.add}>
        <Text style={styles.label}>UrlImg</Text>
        <TextInput
          style={styles.input}
          value={add.urlImg?.toString()}
          onChangeText={(text) => {
            setAdd((prev) => ({
              ...prev,
              urlImg: text,
            }));
          }}
          placeholder="Not necessary"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={addCard}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      {addSuccess && (
        <>
          <Text style={[styles.label, styles.success]}>Add Success</Text>
          <TouchableOpacity style={styles.button} onPress={handleSuccess}>
            <Text style={styles.buttonText}>View new card</Text>
          </TouchableOpacity>
        </>
      )}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C50A07",
  },
  button: {
    backgroundColor: "#783F8E",
    borderRadius: 30,
    marginHorizontal: 40,
    marginVertical: 5,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#FBFFFE",
  },
  add: {
    marginHorizontal: 10,
  },
  label: {
    color: "#FBFFFE",
    fontSize: 16,
  },
  input: {
    height: 35,
    marginVertical: 2,
    paddingHorizontal: 4,
    backgroundColor: "#C0C0C0",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  success: {
    textAlign: "center",
    marginTop: 10,
  },
});
