import { StyleSheet, Text, View, ViewBase } from "react-native";

import React from "react";

export default function BreadDetailScreen() {
  return (
    <View style={style.container}>
      <Text>Bread detail screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
