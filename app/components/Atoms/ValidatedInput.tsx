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
import InputField from "../Atoms/InputField";
import { FormikErrors } from "formik";

interface Props extends TextInputProps {
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
}: Props) => {
  const [underlineColor, setUnderlineColor] = useState("#dbdbdb");
  const [underlineWidth, setUnderlineWidth] = useState(1);
  const [isFocused, setIsFocused] = useState(false);
  const [isWrong, setIsWrong] = useState(
    errors === undefined ? false : errors.length > (required ? 1 : 0)
  );

  useEffect(() => {
    setIsWrong(
      errors === undefined ? false : errors.length > (required ? 1 : 0)
    );
  }, [errors]);

  useEffect(() => {
    if (isWrong) {
      setUnderlineColor("red");
      if (isFocused) {
        setUnderlineWidth(2);
      } else {
        setUnderlineWidth(1);
      }
    } else {
      if (isFocused) {
        setUnderlineColor(colors.primary);
        setUnderlineWidth(2);
      } else {
        setUnderlineColor("#dbdbdb");
        setUnderlineWidth(1);
      }
    }
  }, [value, isWrong, isFocused]);

  return (
    <View>
      <TextInput
        style={{
          ...styles.input,
          borderBottomColor: underlineColor,
          borderBottomWidth: underlineWidth,
        }}
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
  },
  error: {
    color: "red",
    paddingTop: 5,
    fontSize: 14.2,
  },
});

export default ValidatedInput;
