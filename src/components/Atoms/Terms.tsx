import React from "react";
import { Text, StyleSheet, View, ViewStyle } from "react-native";
import { colors } from "../../config/colors";

interface Props {
  style?: ViewStyle;
}

const Terms = ({ style }: Props) => {
  return (
    <View style={style}>
      <Text style={styles.text}>
        By signing up, you agree to out{" "}
        <Text style={styles.highlighted}>Terms</Text>,{" "}
        <Text style={styles.highlighted}>Privacy Policy</Text>, and{" "}
        <Text style={styles.highlighted}>Cookie Use</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#707070",
    fontFamily: "Roboto-Regular",
    fontSize: 10.6,
  },
  highlighted: {
    color: colors.primary,
  },
});

export default Terms;
