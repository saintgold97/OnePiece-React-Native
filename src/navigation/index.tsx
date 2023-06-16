import ROUTES from "./routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import CharactersScreen from "../screens/Character/CharacterScreen";
import { ScrollViewProps, ScrollView, Alert } from "react-native";
import { RootStackParamList } from "../models/RootStack";
import DetailCharacter from "../screens/Character/DetailCharacter";
import EditCharacterScreen from "../screens/Character/EditCharacterScreen";
import { AddCharacterScreen } from "../screens/Character/AddCharacterScreen";

const RootStack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeStack: React.FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={ROUTES.Home}
        component={HomeScreen}
        options={{
           headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

const CharactersStack: React.FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={ROUTES.Characters}
        component={CharactersScreen}
        options={{
          headerStyle: { backgroundColor: "#FA9500" },
        }}
      />
      <RootStack.Screen
        name={ROUTES.AddCharacter}
        component={AddCharacterScreen}
        options={{
          headerStyle: { backgroundColor: "#FA9500" },
        }}
      />
      <RootStack.Screen
        name={ROUTES.DetailCharacter}
        component={DetailCharacter}
        options={{
          headerStyle: { backgroundColor: "#FA9500" },
          animationEnabled: false,
        }}
      />
      <RootStack.Screen
        name={ROUTES.EditCharacter}
        component={EditCharacterScreen}
        options={{
          headerStyle: { backgroundColor: "#FA9500" },
          animationEnabled: false,
        }}
      />
    </RootStack.Navigator>
  );
};

const TabNavigation: React.FC = () => {
  const { navigate } =
    useNavigation<StackNavigationProp<RootStackParamList, ROUTES>>();

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HomeStack}
      screenOptions={{
        tabBarActiveTintColor: "#FA9500",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name={ROUTES.HomeStack}
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: ROUTES.Home,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        listeners={{
          tabPress: () => {
            navigate(ROUTES.HomeStack);
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.CharacterStack}
        component={CharactersStack}
        options={{
          headerShown: false,
          tabBarLabel: ROUTES.Characters,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        listeners={{
          tabPress: () => {
            navigate(ROUTES.CharacterStack);
          },
        }}
      />
    </Tab.Navigator>
  );
};


const NavigatorContainer = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default NavigatorContainer;
