import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox, StatusBar } from "react-native";
import MainStack from "./app/navigation/MainStack";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import changeNavigationBarColor from "react-native-navigation-bar-color";

LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
  "Overwriting fontFamily style attribute preprocessor",
]);

export default function App() {
  useEffect(() => {
    changeNavigationBarColor("white", true, false);
  }, []);

  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor="white" />
      <Provider store={store}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </Provider>
    </>
  );
}
