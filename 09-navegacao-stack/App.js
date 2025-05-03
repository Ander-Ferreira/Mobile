import React from "react";
import StackRoutes from './src/routes/StackRoutes'
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackRoutes></StackRoutes>
      </NavigationContainer>
    </PaperProvider>
   
  );
}

