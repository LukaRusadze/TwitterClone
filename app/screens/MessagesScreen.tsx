import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {}

const MessagesScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>MessagesScreen</Text>
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {},
});
