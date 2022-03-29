import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import FeedScreen from "../screens/FeedScreen";
import svgIcons from "../config/svgIcons";
import SearchScreen from "../screens/SearchScreen";
import NotificationScreen from "../screens/NotificationsScreen";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import MessagesScreen from "../screens/MessagesScreen";

const Tab = createBottomTabNavigator();

interface ScreenOptions {
  route: RouteProp<ParamListBase, string>;
}

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
};

function screenOptions({ route }: ScreenOptions): BottomTabNavigationOptions {
  return {
    headerTitleAlign: "center",
    headerShown: true,
    tabBarShowLabel: false,
    tabBarStyle: {
      height: 62,
      borderTopWidth: 1,
      borderTopColor: "#cccccc",
    },
    tabBarIcon: ({ focused }) => {
      let iconName: keyof typeof svgIcons;

      switch (route.name) {
        case "Feed":
          iconName = !focused ? "ic_home" : "ic_home_selected";
          break;
        case "Search":
          iconName = !focused ? "ic_search" : "ic_search_selected";
          break;
        case "Notifications":
          iconName = !focused
            ? "ic_notifications"
            : "ic_notifications_selected";
          break;
        case "Messages":
          iconName = !focused ? "ic_messages" : "ic_messages_selected";
          break;
        default:
          iconName = "ic_home";
      }

      const Icon = svgIcons[iconName];

      return <Icon width="41%" height="41%" />;
    },
  };
}

export default MainTab;
