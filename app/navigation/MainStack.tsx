import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import StartScreen from "../screens/StartScreen";
import UsernameScreen from "../screens/UsernameScreen";
import PasswordScreen from "../screens/PasswordScreen";
import { RootStackParamList } from "../types/stackNavigation";
import UserCreation from "../screens/UserCreation";
import CustomizeExperienceScreen from "../screens/CustomizeExperienceScreen";
import ConfirmSignUpScreen from "../screens/ConfirmSignUpScreen";
import EmailVerificationScreen from "../screens/EmailVerificationScreen";
import RegistrationPasswordScreen from "../screens/RegistrationPasswordScreen";
import ProfilePictureScreen from "../screens/ProfilePictureScreen";
import CameraScreen from "../screens/CameraScreen";
import CameraPhotoViewScreen from "../screens/CameraPhotoViewScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="UserCreation" component={UserCreation} />
      <Stack.Screen name="Username" component={UsernameScreen} />
      <Stack.Screen name="Password" component={PasswordScreen} />
      <Stack.Screen
        name="CustomizeExperience"
        component={CustomizeExperienceScreen}
      />
      <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUpScreen} />
      <Stack.Screen
        name="EmailVerification"
        component={EmailVerificationScreen}
      />
      <Stack.Screen
        name="RegistrationPassword"
        component={RegistrationPasswordScreen}
      />
      <Stack.Screen name="ProfilePicture" component={ProfilePictureScreen} />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerShown: false, statusBarHidden: true }}
      />
      <Stack.Screen
        name="CameraPhotoView"
        component={CameraPhotoViewScreen}
        options={{
          headerShown: false,
          statusBarHidden: true,
          animation: "none",
        }}
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
  statusBarStyle: "dark",
};

export default MainStack;
