import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { firebase } from "@react-native-firebase/auth";

interface Props {}

const FeedScreen = ({}: Props) => {
  console.log(firebase.auth().currentUser);
  useLayoutEffect(() => {}, []);

  return (
    <View>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <Text>Feed</Text>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
