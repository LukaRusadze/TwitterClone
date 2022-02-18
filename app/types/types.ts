import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Start: undefined;
  UserCreation: undefined;
  Username: undefined;
  Password: {
    username?: string;
  };
  CustomizeExperience: undefined;
  ConfirmSignUp: undefined;
};

export type NavigationStackGenericProp<
  T extends keyof RootStackParamList & string
> = NativeStackNavigationProp<RootStackParamList, T>;

export type RouteGenericProp<T extends keyof RootStackParamList & string> =
  RouteProp<RootStackParamList, T>;
