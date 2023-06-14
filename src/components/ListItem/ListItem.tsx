import React, { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Character } from "../../models/character";
import { MyCard } from "../Card/MyCard";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigation/routes";

type Props = {
  characters: Array<Character>;
  navigation: any;
};

const ListItem: React.FC<Props> = ({ characters, navigation }) => {
  return (
    <>
      <FlatList
        data={characters}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (     
            <MyCard
              style={{marginBottom:-40, padding:16}}
              img={`${item.urlImg}`}
              title={`${item.name}`}              
              span1={"Role:"}
              text1={`${item.role}`}
              span2={"Crews:"}
              text2={`${item.crew}`}
              span3={"Fruit:"}
              text3={item.fruit ? `${item.fruit}` : "N/A"}
              onPress={()=>navigation.navigate(ROUTES.DetailCharacter, {characterId: item._id})}
            />
          );
        }}
        keyExtractor={(character) => character._id}
      />
      </>
  );
};

export default ListItem;
