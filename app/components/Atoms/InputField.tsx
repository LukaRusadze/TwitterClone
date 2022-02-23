import React, { useState } from "react";
import { TextInput, StyleSheet, TextInputProps, TextStyle } from "react-native";
import { colors } from "../../config/colors";

export interface InputFieldProps extends TextInputProps {
  style?: TextStyle;
  setIsFocused?: Function;
  onFocus?: () => void;
  onEndEditing?: () => void;
}

const InputField = ({
  onChangeText,
  style,
  setIsFocused,
  onFocus,
  onEndEditing,
  ...props
}: InputFieldProps) => {
  const [isFocused, setIsFocusedLocal] = useState(false);

  return (
    <TextInput
      style={
        isFocused
          ? [styles.input, styles.selected, style]
          : [styles.input, style]
      }
      autoCorrect={false}
      placeholderTextColor={"#606060"}
      onChangeText={onChangeText}
      selectionColor={colors.primary}
      onEndEditing={() => {
        if (setIsFocused) {
          setIsFocused(false);
        }
        setIsFocusedLocal(false);
        if (onEndEditing) {
          onEndEditing();
        }
      }}
      onFocus={() => {
        if (setIsFocused) {
          setIsFocused(true);
        }
        setIsFocusedLocal(true);
        if (onFocus) {
          onFocus();
        }
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
    borderBottomWidth: 1.8,
  },
});

export default InputField;
