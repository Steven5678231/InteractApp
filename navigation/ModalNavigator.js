import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
const ModalStack = createStackNavigator();

export default function ModalNavigator() {
  return <ModalStack.Navigator></ModalStack.Navigator>;
}
