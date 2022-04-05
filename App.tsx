import React, { useEffect } from "react";
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { LogBox, StatusBar } from "react-native";
import MainStack from "./app/navigation/MainStack";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { firebase } from "@react-native-firebase/auth";
import { clearUserState } from "./app/store/features/account/accountSlice";

LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
  "Overwriting fontFamily style attribute preprocessor",
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  "Cannot record touch end without a touch start.",
]);

export default function App() {
  useEffect(() => {
    changeNavigationBarColor("white", true, false);
  }, []);

  const navigationRef = useNavigationContainerRef();

  firebase.auth().onAuthStateChanged((userState) => {
    if (
      !userState &&
      navigationRef.current?.getCurrentRoute()?.name !== "Start"
    ) {
      navigationRef.current?.reset({ routes: [{ name: "Start" }] });
      store.dispatch(clearUserState());
    }
  });

  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor="white" />
      <Provider store={store}>
        <NavigationContainer ref={navigationRef} theme={theme}>
          <MainStack />
        </NavigationContainer>
      </Provider>
    </>
  );
}

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    text: "black",
  },
};
