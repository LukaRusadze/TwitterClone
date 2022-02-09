import React, { useState } from "react";
import { TextInput, StyleSheet, TextInputProps, TextStyle } from "react-native";
import { colors } from "../../config/colors";

interface Props extends TextInputProps {
  setInputValue: Function;
  style?: TextStyle;
}

const InputField = ({ setInputValue, placeholder, style, ...props }: Props) => {
  const [underlineColor, setUnderlineColor] = useState("#dbdbdb");
  const [underlineWidth, setUnderlineWidth] = useState(1);

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
      onChangeText={(state) => setInputValue(state)}
      selectionColor={colors.primary}
      onEndEditing={() => setUnderlineColor("#dbdbdb")}
      onFocus={() => {
        setUnderlineColor(colors.primary);
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
