import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PhotoFile } from "react-native-vision-camera";

export type RootStackParamList = {
  Start: undefined;
  UserCreation: undefined;
  Username: undefined;
  Password: {
    username?: string;
  };
  CustomizeExperience: undefined;
  ConfirmSignUp: undefined;
  EmailVerification: undefined;
  RegistrationPassword: undefined;
  ProfilePicture: undefined;
  Camera: undefined;
  CameraPhotoView: PhotoFile;
  MainTab: undefined;
};

export type NavigationStackGenericProp<
  T extends keyof RootStackParamList & string,
> = NativeStackNavigationProp<RootStackParamList, T>;

export type RouteGenericProp<T extends keyof RootStackParamList & string> =
  RouteProp<RootStackParamList, T>;
