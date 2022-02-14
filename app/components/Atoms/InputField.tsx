import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet, TextInputProps, TextStyle } from "react-native";
import { colors } from "../../config/colors";

export interface InputFieldProps extends TextInputProps {
  style?: TextStyle;
}

const InputField = ({ onChangeText, style, ...props }: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={
        isFocused
          ? [styles.input, styles.selected, style]
          : [styles.input, style]
      }
      autoCorrect={false}
      placeholderTextColor={"#606060"}
      onChangeText={(state) => {
        if (onChangeText) {
          onChangeText(state);
        }
      }}
      selectionColor={colors.primary}
      onEndEditing={() => {
        setIsFocused(false);
      }}
      onFocus={() => {
        setIsFocused(true);
      }}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: "#dbdbdb",
  },
  selected: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
});

export default InputField;
