import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {}

const SearchScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {},
});
