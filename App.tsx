import { StyleSheet, Text, View } from "react-native";

import AppLoading from "expo-app-loading";
import Navigator from "./src/Navigator";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    OpenSansPro: require("./assets/fonts/SourceSansPro-Black.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
