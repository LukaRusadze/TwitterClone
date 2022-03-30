import React, { useLayoutEffect, useState } from "react";
import MainTab from "./MainTab";
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptions}>
      <Drawer.Screen name="MainTab" component={MainTab} />
    </Drawer.Navigator>
  );
};

const screenOptions: DrawerNavigationOptions = {
  headerShown: false,
};

export default MainDrawer;
