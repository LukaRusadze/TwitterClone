import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import UsernameScreen from "./app/screens/UsernameScreen";
import StartScreen from "./app/screens/StartScreen";
import { fonts } from "./app/config/fonts";
import { Platform } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import PasswordScreen from "./app/screens/PasswordScreen";

export type RootStackParamList = {
  Start: undefined;
  Login: undefined;
  Password: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={UsernameScreen} />
        <Stack.Screen name="Password" component={PasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions: NativeStackNavigationOptions = {
  title: "Aligned Center",
  headerTitleAlign: "center",
  headerShown: true,
  contentStyle: {
    backgroundColor: "white",
  },
};
