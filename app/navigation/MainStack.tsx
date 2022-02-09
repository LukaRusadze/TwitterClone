import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import StartScreen from "../screens/StartScreen";
import UsernameScreen from "../screens/UsernameScreen";
import PasswordScreen from "../screens/PasswordScreen";
import { RootStackParamList } from "../types/navigationTypes";

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Login" component={UsernameScreen} />
      <Stack.Screen name="Password" component={PasswordScreen} />
    </Stack.Navigator>
  );
};

const screenOptions: NativeStackNavigationOptions = {
  title: "Aligned Center",
  headerTitleAlign: "center",
  headerShown: true,
  contentStyle: {
    backgroundColor: "white",
  },
};

export default MainStack;

const styles = StyleSheet.create({});
