import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet, TextInputProps, TextStyle } from "react-native";
import { colors } from "../../config/colors";

export interface InputFieldProps extends TextInputProps {
  style?: TextStyle;
  wrongColor?: string;
  filter?: (value: string) => boolean;
  setWrongOutput?: Function;
}

const InputField = ({
  onChangeText,
  style,
  wrongColor,
  filter,
  setWrongOutput,
  ...props
}: InputFieldProps) => {
  const [underlineColor, setUnderlineColor] = useState("#dbdbdb");
  const [underlineWidth, setUnderlineWidth] = useState(1);
  const [isFocused, setIsFocused] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  useEffect(() => {
    if (isWrong) {
      if (setWrongOutput != undefined) {
        setWrongOutput(true);
      }
      setUnderlineColor(wrongColor!);
    } else {
      if (setWrongOutput != undefined) {
        setWrongOutput(false);
      }
    }
  }, [isWrong]);

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

        if (filter != undefined) {
          setIsWrong(filter(state));
        }
      }}
      selectionColor={colors.primary}
      onEndEditing={() => {
        setIsFocused(false);
        setUnderlineWidth(1);
        if (!isWrong) {
          setUnderlineColor("#dbdbdb");
        }
      }}
      onFocus={() => {
        setIsFocused(true);
        if (!isWrong) {
          setUnderlineColor(colors.primary);
        }
        setUnderlineWidth(2);
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
