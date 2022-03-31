import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {}

const NotificationsScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text>NotificationsScreen</Text>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {},
});
