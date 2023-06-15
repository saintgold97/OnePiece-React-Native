import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View, StyleProp, ViewStyle } from "react-native";

interface DeleteProps{
    handleDelete?:() => void
    style: StyleProp<ViewStyle>;
}

export const DeleteCard: React.FC<DeleteProps> = ({style, handleDelete}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.modalText}>Are you sure?</Text>
          <View style={styles.buttonContainer}>
          <TouchableOpacity
              style={[styles.button, styles.buttonMarg]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={handleDelete}
            >
              <Text style={styles.textStyle}>Delete</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={style}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    margin: 50,
    marginVertical:"50%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  buttonContainer:{
    flexDirection:"row"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#783F8E",
  },
  buttonMarg:{
    marginRight:5
  },
  textStyle: {
    textAlign:"center",
    fontSize:20,
    color:"#FBFFFE"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default DeleteCard;
