import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../config/colors";

interface Props {}

const LoadingScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={200} color={colors.primary} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
});
