import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import ROUTES from "../navigation/routes";
import { RootStackParamList } from "./RootStack";


type ScreenNavigationProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, ROUTES>;
  route: RouteProp<RootStackParamList, T>;
};
type ScreenFC<S extends keyof RootStackParamList> = React.FC<
  ScreenNavigationProps<S>
>;

type CustomScreenProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, ROUTES>;
};
export type CustomScreenFC<S extends keyof RootStackParamList> = React.FC<
  CustomScreenProps<S>
>;
export default ScreenFC;
