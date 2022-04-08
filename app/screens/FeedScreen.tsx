import { StyleSheet, View } from "react-native";
import React, { useLayoutEffect } from "react";
import RegularTweet from "../components/templates/RegularTweet";

const FeedScreen = () => {
  useLayoutEffect(() => {}, []);
  return (
    <>
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
