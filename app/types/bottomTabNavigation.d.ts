import { RouteProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type RootTabParamList = {
  Feed: undefined;
  Search: undefined;
  Spaces: undefined;
  Notifications: undefined;
  Messages: undefined;
};

export type NavigationTabGenericProp<
  T extends keyof RootTabParamList & string,
> = BottomTabNavigationProp<RootTabParamList, T>;

export type RouteGenericProp<T extends keyof RootTabParamList & string> =
  RouteProp<RootTabParamList, T>;
