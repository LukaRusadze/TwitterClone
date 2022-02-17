import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Start: undefined;
  Register: undefined;
  Username: undefined;
  Password: {
    username?: string;
  };
  CustomizeExperience: {
    name: string;
    phoneNumber: string;
    email: string;
    dateOfBirth: Date;
  };
};

export type NavigationStackGenericProp<
  T extends keyof RootStackParamList & string
> = NativeStackNavigationProp<RootStackParamList, T>;

export type RouteGenericProp<T extends keyof RootStackParamList & string> =
  RouteProp<RootStackParamList, T>;
