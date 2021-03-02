import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";

import BottomNavigator from "./BottomNavigator";
import ModalNavigator from "./ModalNavigator";

const RootStack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen name="BottomNavigator" component={BottomNavigator} />
        <RootStack.Screen name="ModalNavigator" component={ModalNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
