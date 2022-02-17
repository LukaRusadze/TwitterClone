import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import StartScreen from "../screens/StartScreen";
import UsernameScreen from "../screens/UsernameScreen";
import PasswordScreen from "../screens/PasswordScreen";
import { RootStackParamList } from "../types/types";
import UserCreation from "../screens/UserCreation";
import CustomizeExperienceScreen from "../screens/CustomizeExperienceScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Register" component={UserCreation} />
      <Stack.Screen name="Username" component={UsernameScreen} />
      <Stack.Screen name="Password" component={PasswordScreen} />
      <Stack.Screen
        name="CustomizeExperience"
        component={CustomizeExperienceScreen}
      />
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
