import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";

const FeedScreen = () => {
  useLayoutEffect(() => {
    // firebase.auth().signOut();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <Text>Feed</Text>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {},
});
