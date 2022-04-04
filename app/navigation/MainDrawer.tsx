import React, { useEffect, useState } from "react";
import MainTab from "./MainTab";
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import CustomDrawer from "../components/Organisms/CustomDrawer";
import { initializeUserData } from "../utils/firebase/getData";
import LoadingScreen from "../screens/LoadingScreen";
import { StatusBar } from "react-native";

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeUserData().then(() => setIsLoading(false));
    StatusBar.setBackgroundColor("white");
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Drawer.Navigator
      screenOptions={screenOptions}
      drawerContent={CustomDrawer}
    >
      <Drawer.Screen name="MainTab" component={MainTab} />
    </Drawer.Navigator>
  );
};

const screenOptions: DrawerNavigationOptions = {
  headerShown: false,
  drawerStyle: {
    width: "81.5%",
  },
};

export default MainDrawer;
