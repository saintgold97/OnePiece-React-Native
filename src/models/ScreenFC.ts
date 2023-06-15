import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import ROUTES from "../navigation/routes";
import { RootStackParamList } from "./RootStack";

type ScreenNavigationProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};
type ScreenFC<S extends keyof RootStackParamList> = React.FC<
  ScreenNavigationProps<S>
>;

type CharacterScreenProps<S extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, S>;
  route: RouteProp<RootStackParamList, S>;
};
export type CharacterScreenFC<S extends keyof RootStackParamList> = React.FC<
  CharacterScreenProps<S>
>;
export default ScreenFC;
