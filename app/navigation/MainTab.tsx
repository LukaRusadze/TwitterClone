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
import SpacesScreen from "../screens/SpacesScreen";
import { Image, Pressable, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../config/colors";
import { store } from "../store/store";
import { NavigationDrawerGenericProp } from "../types/drawerNavigation";

const Tab = createBottomTabNavigator();

interface ScreenOptions {
  route: RouteProp<ParamListBase, string>;
  navigation: NavigationDrawerGenericProp<"MainTab">;
}

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          headerTitleAlign: "center",
          headerTitle: () => (
            <Ionicons name="logo-twitter" size={25} color={colors.primary} />
          ),
        }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Spaces" component={SpacesScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
};

function screenOptions({
  route,
  navigation,
}: ScreenOptions): BottomTabNavigationOptions {
  return {
    tabBarShowLabel: false,
    tabBarStyle: {
      height: 56.5,
      borderTopWidth: 0.7,
      borderTopColor: "#fefefe",
    },
    headerLeft: () => {
      return (
        <Pressable
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Image
            style={styles.image}
            source={{
              uri: store.getState().account.profilePicture,
            }}
          />
        </Pressable>
      );
    },
    tabBarButton: (props) => (
      <Pressable
        android_ripple={{ color: "#dedede", borderless: true }}
        {...props}
      />
    ),
    tabBarIcon: ({ focused }) => {
      let iconName: keyof typeof svgIcons;

      switch (route.name) {
        case "Feed":
          iconName = !focused ? "ic_home" : "ic_home_selected";
          break;
        case "Search":
          iconName = !focused ? "ic_search" : "ic_search_selected";
          break;
        case "Spaces":
          iconName = !focused ? "ic_spaces" : "ic_spaces_selected";
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

      return <Icon width="46%" height="46%" />;
    },
  };
}

export default MainTab;

const styles = StyleSheet.create({
  image: {
    width: 27.5,
    height: 27.5,
    borderRadius: 100,
    marginLeft: 15,
  },
});
