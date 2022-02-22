import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { fonts } from "./app/config/fonts";
import { Platform, LogBox } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import MainStack from "./app/navigation/MainStack";
import { Provider } from "react-redux";
import { store } from "./app/store/store";

LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
  "Overwriting fontFamily style attribute preprocessor",
]);

export default function App() {
  if (Platform.OS === "android") {
    NavigationBar.setBackgroundColorAsync("white");
    NavigationBar.setButtonStyleAsync("dark");
  }

  const [loaded] = useFonts(fonts);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
}
