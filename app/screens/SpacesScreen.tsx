import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {}

const SpacesScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>SpacesScreen</Text>
    </View>
  );
};

export default SpacesScreen;

const styles = StyleSheet.create({
  container: {},
});
