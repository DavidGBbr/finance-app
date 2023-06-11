import React from "react";
import "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/Routes";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#222727" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}
