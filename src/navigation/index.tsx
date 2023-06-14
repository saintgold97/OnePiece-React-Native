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

const RootStack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeStack: React.FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={ROUTES.Home}
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#FA9500" },
        }}
      />
      <RootStack.Screen
        name={ROUTES.Characters}
        component={CharactersScreen}
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
        name={ROUTES.DrawerMenu}
        component={DrawerMenu}
        options={{
          headerShown: false,
          tabBarLabel: ROUTES.Characters,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const CustomDrawerContent = (
  props: ScrollViewProps & {
    children?: React.ReactNode;
  } & React.RefAttributes<ScrollView> &
    React.ComponentProps<typeof DrawerItemList>
) => {
  const { navigate } =
    useNavigation<StackNavigationProp<RootStackParamList, ROUTES>>();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Home"
        inactiveTintColor="#FA9500"
        onPress={() => navigate(ROUTES.HomeStack)}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerMenu = () => {
  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.HomeStack}
      screenOptions={{
        headerTintColor: "black",
        headerStyle: { backgroundColor: "orange" },
        headerShadowVisible: true,
        drawerInactiveTintColor: "orange",
        drawerActiveTintColor: "orange",
        /* drawerActiveBackgroundColor: "yellow", */
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name={ROUTES.Characters} component={CharactersScreen} />
    </Drawer.Navigator>
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
