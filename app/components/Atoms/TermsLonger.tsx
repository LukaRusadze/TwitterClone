import { StyleSheet, Text, TextStyle, View, ViewProps } from "react-native";
import React from "react";
import { colors } from "../../config/colors";

interface Props extends ViewProps {
  textStyle: TextStyle;
}

const TermsLonger = ({ style, textStyle }: Props) => {
  return (
    <View style={style}>
      <Text style={[styles.text, textStyle]}>
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
    fontFamily: "TwitterChirp",
    fontSize: 13,
  },
  highlighted: {
    color: colors.primary,
  },
});
