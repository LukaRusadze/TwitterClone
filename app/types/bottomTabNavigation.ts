import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootTabParamList = {
  Feed: undefined;
};

export type NavigationStackGenericProp<
  T extends keyof RootTabParamList & string,
> = NativeStackNavigationProp<RootTabParamList, T>;

export type RouteGenericProp<T extends keyof RootTabParamList & string> =
  RouteProp<RootTabParamList, T>;
