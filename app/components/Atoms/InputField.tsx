import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet, TextInputProps, TextStyle } from "react-native";
import { colors } from "../../config/colors";

interface Props extends TextInputProps {
  setInputValue: Function;
  style?: TextStyle;
  wrongColor?: string;
  filter?: (value: string) => boolean;
  setWrongOutput?: Function;
}

const InputField = ({
  setInputValue,
  placeholder,
  style,
  wrongColor,
  filter,
  setWrongOutput,
  ...props
}: Props) => {
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
      {...props}
      autoCorrect={false}
      placeholder={placeholder}
      placeholderTextColor={"#606060"}
      onChangeText={(state) => {
        setInputValue(state);

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
