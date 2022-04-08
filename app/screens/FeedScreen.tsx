import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { firebase } from "@react-native-firebase/auth";
import RegularTweet from "../components/templates/RegularTweet";
import FAB from "../components/Atoms/FAB";

const FeedScreen = () => {
  useLayoutEffect(() => {
    // firebase.auth().signOut();
  }, []);
  return (
    <>
      <FAB />
      <View style={styles.container}>
        <RegularTweet />
      </View>
    </>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {},
});
