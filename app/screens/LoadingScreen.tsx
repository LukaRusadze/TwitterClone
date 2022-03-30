import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {}

const LoadingScreen = (props: Props) => {
  console.log("test");
  return (
    <View>
      <Text>LoadingScreen</Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({});
