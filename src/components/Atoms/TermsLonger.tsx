import { StyleSheet, Text, TextStyle, View, ViewProps } from "react-native";
import React from "react";
import { colors } from "../../config/colors";

interface Props extends ViewProps {
  textStyle?: TextStyle;
}

const TermsLonger = ({ style, textStyle }: Props) => {
  return (
    <View style={style}>
      <Text style={[styles.text, textStyle]}>
        By signing up, you agree to the{" "}
        <Text style={styles.highlighted}>Terms of Service</Text> and Privacy
        Policy, including
        <Text style={styles.highlighted}> Cookie Use</Text>. Twitter may use
        your contact information, including your email address and phone number
        for purposes outlined in our Privacy Policy, like keeping your account
        secure and personalizing our services, including ads.{" "}
        <Text style={styles.highlighted}>Learn more</Text>. Others will be able
        to find you by email or phone number, when provided, unless you choose
        otherwise <Text style={styles.highlighted}>here</Text>.
      </Text>
    </View>
  );
};

export default TermsLonger;

const styles = StyleSheet.create({
  text: {
    color: "#707070",
    fontFamily: "Chirp-Regular",
    fontSize: 14.9,
  },
  highlighted: {
    color: colors.primary,
  },
});
