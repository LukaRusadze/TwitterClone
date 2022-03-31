import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {}

const LoadingScreen = ({}: Props) => {
  console.log("test");
  return (
    <View style={styles.container}>
      <Text>LoadingScreen</Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {},
});
