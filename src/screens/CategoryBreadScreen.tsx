import { Button, StyleSheet, Text, View, ViewBase } from "react-native";

import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function CategoryBreadScreen() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text>Category bread screen</Text>
      <Button
        title={"Ir a detalle"}
        onPress={() => {
          // @ts-ignore
          navigation.navigate("Detail");
        }}
      />
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
