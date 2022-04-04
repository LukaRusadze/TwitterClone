import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import DrawerHeader from "../Atoms/DrawerHeader";
import DrawerListItem from "../Atoms/DrawerListItem";
import DrawerSeparator from "../Atoms/DrawerSeparator";
import DrawerExtraButtons from "../Atoms/DrawerExtraButtons";

const CustomDrawer = ({}: DrawerContentComponentProps) => {
  return (
    <SafeAreaView style={styles.drawerContainer}>
      <DrawerHeader />
      <DrawerContentScrollView contentContainerStyle={styles.scrollView}>
        <DrawerListItem
          icon="ic_vector_person_stroke"
          text="Profile"
          onPress={() => null}
        />
        <DrawerListItem
          icon="ic_vector_lists_stroke"
          text="Lists"
          onPress={() => null}
        />
        <DrawerListItem
          icon="ic_vector_topics_stroke"
          text="Topics"
          onPress={() => null}
        />
        <DrawerListItem
          icon="ic_vector_bookmark_stroke"
          text="Bookmarks"
          onPress={() => null}
        />
        <DrawerListItem
          icon="ic_vector_lightning_stroke"
          text="Moments"
          onPress={() => null}
        />
        <DrawerListItem
          icon="ic_vector_money"
          text="Monetization"
          onPress={() => null}
        />

        <DrawerSeparator />

        <DrawerListItem
          icon="ic_vector_rocket_stroke"
          text="Twitter for Professionals"
          onPress={() => null}
        />

        <DrawerSeparator />

        <DrawerListItem text="Settings and privacy" onPress={() => null} />
        <DrawerListItem text="Help Center" onPress={() => null} />
      </DrawerContentScrollView>
      <DrawerExtraButtons />
    </SafeAreaView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  scrollView: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});
