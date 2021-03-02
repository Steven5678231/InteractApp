import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import GameScreen from "../screens/GameScreen";
import ControlScreen from "../screens/ControlScreen";
import HomeScreen from "../screens/HomeScreen";
import SurveyScreen from "../screens/SurveyScreen";

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const GameStack = createStackNavigator();
function GameStackScreen() {
  return (
    <GameStack.Navigator>
      <GameStack.Screen name="Game" component={GameScreen} />
    </GameStack.Navigator>
  );
}

const ControlStack = createStackNavigator();
function ControlStackScreen() {
  return (
    <ControlStack.Navigator>
      <ControlStack.Screen name="Control" component={ControlScreen} />
    </ControlStack.Navigator>
  );
}

const SurveyStack = createStackNavigator();
function SurveyStackScreen() {
  return (
    <SurveyStack.Navigator>
      <SurveyStack.Screen name="Survey" component={SurveyScreen} />
    </SurveyStack.Navigator>
  );
}

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        // tabBarIcon: ({ focused }) => {
        //   let iconName;
        //   if (route.name === "Home") {
        //     iconName = focused ? HomeSelected : HomeIcon;
        //   } else if (route.name === "Contact") {
        //     iconName = focused ? ContactSelected : ContactIcon;
        //   } else if (route.name === "Status") {
        //     iconName = focused ? StatusSelected : StatusIcon;
        //   } else if (route.name === "Setting") {
        //     iconName = focused ? SettingSelected : SettingIcon;
        //   }
        //   // You can return any component that you like here!
        //   return (
        //     <Image
        //       resizeMode={"contain"}
        //       source={iconName}
        //       style={{ width: 22, height: 24 }}
        //     />
        //   );
        // },
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Survey" component={SurveyStackScreen} />
      <Tab.Screen name="Game" component={GameStackScreen} />
      <Tab.Screen name="Control" component={ControlStackScreen} />
    </Tab.Navigator>
  );
}
