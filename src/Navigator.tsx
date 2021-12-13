import BreadDetailScreen from "./screens/BreadDetailScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryBreadScreen from "./screens/CategoryBreadScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Navigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={CategoriesScreen} />
        <Stack.Screen name={"Bread"} component={CategoryBreadScreen} />
        <Stack.Screen name={"Detail"} component={BreadDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
