import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet, TextInputProps, TextStyle } from "react-native";
import { colors } from "../../config/colors";

export interface InputFieldProps extends TextInputProps {
  style?: TextStyle;
}

const InputField = ({ onChangeText, style, ...props }: InputFieldProps) => {
  const [underlineColor, setUnderlineColor] = useState("#dbdbdb");
  const [underlineWidth, setUnderlineWidth] = useState(1);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={{
        ...styles.input,
        ...style,
        borderBottomColor: underlineColor,
        borderBottomWidth: underlineWidth,
      }}
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
        setUnderlineWidth(1);
        setUnderlineColor("#dbdbdb");
      }}
      onFocus={() => {
        setIsFocused(true);
        setUnderlineWidth(2);
        setUnderlineColor(colors.primary);
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
  },
});

export default InputField;
