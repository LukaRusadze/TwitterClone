import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import LoginScreen from "./app/screens/LoginScreen";
import StartScreen from "./app/screens/StartScreen";
import { fonts } from "./app/config/fonts";

export type RootStackParamList = {
  Start: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [loaded] = useFonts(fonts);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
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
