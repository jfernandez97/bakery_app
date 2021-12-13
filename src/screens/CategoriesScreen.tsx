import { Button, StyleSheet, Text, View, ViewBase } from "react-native";

import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function CategoriesScreen() {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Text>Categories screen</Text>
      <Button
        title={"Ir a productos"}
        onPress={() => {
          // @ts-ignore
          navigation.navigate("Bread");
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
