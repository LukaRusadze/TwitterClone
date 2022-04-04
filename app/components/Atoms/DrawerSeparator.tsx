import { StyleSheet, View } from "react-native";
import React from "react";

interface Props {}

const DrawerSeparator = ({}: Props) => {
  return <View style={styles.separator} />;
};

export default DrawerSeparator;

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    borderBottomWidth: 0.3,
    borderColor: "#9e9e9e",
    marginTop: 10,
    marginBottom: 10,
  },
});
