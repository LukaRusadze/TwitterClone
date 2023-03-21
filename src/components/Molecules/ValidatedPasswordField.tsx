import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PasswordField, { PasswordFieldProps } from "./PasswordField";

interface Props extends PasswordFieldProps {
  errors?: string;
}

const ValidatedPasswordField = ({ setInputValue, style, errors }: Props) => {
  return (
    <View style={style}>
      <PasswordField
        style={errors && styles.underline}
        setInputValue={setInputValue}
      />
      <Text style={styles.errors}>{errors}</Text>
    </View>
  );
};

export default ValidatedPasswordField;

const styles = StyleSheet.create({
  underline: {
    borderBottomColor: "red",
  },
  errors: {
    marginTop: 5,
    color: "red",
    fontFamily: "Roboto-Regular",
    fontSize: 15,
  },
});
