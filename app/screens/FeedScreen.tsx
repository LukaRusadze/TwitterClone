import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { firebase } from "@react-native-firebase/auth";

const FeedScreen = () => {
  useLayoutEffect(() => {
    firebase.auth().signOut();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {},
});
