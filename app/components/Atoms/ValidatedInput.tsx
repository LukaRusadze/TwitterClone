import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../../config/colors";
import InputField from "./InputField";
import { FormikErrors } from "formik";

export interface ValidatedInputProps extends TextInputProps {
  style?: TextStyle;
  wrongColor?: string;
  errors?: string;
  required?: boolean;
}

const ValidatedInput = ({
  style,
  errors,
  value,
  onChangeText,
  required = false,
  ...props
}: ValidatedInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isWrong, setIsWrong] = useState(
    errors === undefined ? false : errors.length > (required ? 1 : 0)
  );

  useEffect(() => {
    setIsWrong(
      errors === undefined ? false : errors.length > (required ? 1 : 0)
    );
  }, [errors]);

  return (
    <View>
      <TextInput
        style={[
          isFocused ? [styles.input, styles.selected] : styles.input,
          isWrong && styles.wrongUnderline,
        ]}
        selectionColor={colors.primary}
        placeholderTextColor={"#606060"}
        onFocus={() => setIsFocused(true)}
        onEndEditing={() => setIsFocused(false)}
        onChangeText={onChangeText}
        value={value}
        {...props}
      />
      <Text style={styles.error}>{errors}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: "#dbdbdb",
    color: "black",
  },
  error: {
    color: "red",
    paddingTop: 5,
    fontSize: 14.2,
  },
  wrongUnderline: {
    borderBottomColor: "red",
  },
  selected: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
});

export default ValidatedInput;
