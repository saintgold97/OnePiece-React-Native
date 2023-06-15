import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { CharacterScreenFC } from "../../models/ScreenFC";
import { Character } from "../../models/character";
import axios from "axios";
import { urlCharacters } from "../../hooks/useCharacters";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const EditCharacterScreen: CharacterScreenFC<"EditCharacter"> = ({
  navigation,
  route,
}) => {
  const { characterId, item } = route.params;
  const [character, setCharacter] = useState<Character | undefined>(item);
  const [editStatus, setEditStatus] = useState<Character>({
    _id: "",
    name: "",
    role: "",
    size: "",
    age: Number(""),
    bounty: "",
    fruit: "",
    crew: "",
    urlImg: "",
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleSuccess = () => {
    navigation.replace("DetailCharacter", { characterId: characterId });
  }

  useEffect(() => {
    if (character) {
      setEditStatus({
        _id: character._id,
        name: character.name,
        role: character.role,
        size: character.size,
        age: character.age,
        bounty: character.bounty,
        fruit: character.fruit,
        crew: character.crew,
        urlImg: character.urlImg,
      });
    }
  }, [character]);

  const editCard = async () => {
    try {
      const updatedStatus = {
        name: editStatus.name !== "" ? editStatus.name : character!.name,
        role: editStatus.role !== "" ? editStatus.role : character!.role,
        size: editStatus.size !== "" ? editStatus.size : character!.size,
        age:
          editStatus.age !== Number("")
            ? Number(editStatus.age)
            : character!.age,
        bounty:
          editStatus.bounty !== "" ? editStatus.bounty : character!.bounty,
        fruit: editStatus.fruit !== "" ? editStatus.fruit : character!.fruit,
        crew: editStatus.crew !== "" ? editStatus.crew : character!.crew,
        urlImg:
          editStatus.urlImg !== "" ? editStatus.urlImg : character!.urlImg,
      };

      await axios.patch(`${urlCharacters}/${character?._id}`, updatedStatus);
      setEditStatus(editStatus);
      setUpdateSuccess(true);
    } catch (error) {
      console.error(error);
      console.log("Sono qui");
    }
  };
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.edit}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={editStatus.name}
          onChangeText={(text) => {
            setEditStatus((prev) => ({
              ...prev,
              name: text,
            }));
          }}
        />
      </View>
      <View style={styles.edit}>
        <Text style={styles.label}>Role</Text>
        <TextInput
          style={styles.input}
          value={editStatus.role}
          onChangeText={(text) => {
            setEditStatus((prev) => ({
              ...prev,
              role: text,
            }));
          }}
        />
      </View>
      <View style={styles.edit}>
        <Text style={styles.label}>Crews</Text>
        <TextInput
          style={styles.input}
          value={editStatus.crew}
          onChangeText={(text) => {
            setEditStatus((prev) => ({
              ...prev,
              crew: text,
            }));
          }}
        />
      </View>
      <View style={styles.edit}>
        <Text style={styles.label}>Fruit</Text>
        <TextInput
          style={styles.input}
          value={editStatus.fruit}
          onChangeText={(text) => {
            setEditStatus((prev) => ({
              ...prev,
              fruit: text,
            }));
          }}
        />
      </View>
      <View style={styles.edit}>
        <Text style={styles.label}>Size</Text>
        <TextInput
          style={styles.input}
          value={editStatus.size}
          onChangeText={(text) => {
            setEditStatus((prev) => ({
              ...prev,
              size: text,
            }));
          }}
        />
      </View>
      <View style={styles.edit}>
        <Text style={styles.label}>Bounty</Text>
        <TextInput
          style={styles.input}
          value={editStatus.bounty}
          onChangeText={(text) => {
            setEditStatus((prev) => ({
              ...prev,
              bounty: text,
            }));
          }}
        />
      </View>
      <View style={styles.edit}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          value={editStatus.age?.toString()}
          onChangeText={(text) => {
            const number = parseInt(text);
            setEditStatus((prev) => ({
              ...prev,
              age: isNaN(number) ? 0 : number,
            }));
          }}
        />
      </View>
      <View style={styles.edit}>
        <Text style={styles.label}>UrlImg</Text>
        <TextInput
          style={styles.input}
          value={editStatus.urlImg}
          onChangeText={(text) => {
            setEditStatus((prev) => ({
              ...prev,
              urlImg: text,
            }));
          }}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={editCard}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      {updateSuccess && (
        <>
          <Text style={[styles.label, styles.success]}>Add Success</Text>
          <TouchableOpacity style={styles.button} onPress={handleSuccess}>
            <Text style={styles.buttonText}>View updated card</Text>
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
  edit: {
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

export default EditCharacterScreen;
