import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../config/colors";

type Props = {};

const TermsLonger = (props: Props) => {
  return (
    <View>
      <Text style={styles.text}>
        By signing up, you agree to out{" "}
        <Text style={styles.highlighted}>Terms</Text>, Privacy Policy, and
        <Text style={styles.highlighted}> Cookie Use</Text>. Twitter may use
        your contact informaiton, including your email address and phone number
        for purposes outlined in our Privacy Policy.{" "}
        <Text style={styles.highlighted}>Learn More</Text>
      </Text>
    </View>
  );
};

export default TermsLonger;

const styles = StyleSheet.create({
  text: {
    color: "#707070",
    fontFamily: "Roboto-Regular",
    fontSize: 13,
  },
  highlighted: {
    color: colors.primary,
  },
});
