import { RouteProp } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

export type RootDrawerParamList = {
  MainTab: undefined;
};

export type NavigationDrawerGenericProp<
  T extends keyof RootDrawerParamList & string,
> = DrawerNavigationProp<RootDrawerParamList, T>;

export type RouteGenericProp<T extends keyof RootDrawerParamList & string> =
  RouteProp<RootDrawerParamList, T>;
