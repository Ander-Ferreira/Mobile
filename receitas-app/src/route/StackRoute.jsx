import React from "react";
import HomeScreen from "../screens/HomeScreen";
import DetalheScreen from "../screens/DetalheScreen";
import { createStackNavigator } from "@react-navigation/stack";


export default function StackRoute() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetalheScreen" component={DetalheScreen} />
    </Stack.Navigator>
  );
}