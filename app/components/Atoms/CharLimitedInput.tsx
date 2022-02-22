import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../../config/colors";
import { ValidatedInputProps } from "./ValidatedInput";

export interface CharLimitedInputProps extends ValidatedInputProps {
  charLimit: number;
}

const CharLimitedInput = ({
  style,
  errors,
  value,
  onChangeText,
  required = false,
  charLimit,
  ...props
}: CharLimitedInputProps) => {
  const [tempInputValue, setTempInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isWrong, setIsWrong] = useState(
    errors === undefined ? false : errors.length > (required ? 1 : 0)
  );

  useEffect(() => {
    setIsWrong(
      errors === undefined ? false : errors.length > (required ? 1 : 0)
    );
  }, [errors, required]);

  return (
    <View style={style}>
      <TextInput
        style={[
          isFocused ? [styles.input, styles.selected] : styles.input,
          isWrong && styles.wrongUnderline,
        ]}
        selectionColor={colors.primary}
        placeholderTextColor={"#606060"}
        onFocus={() => setIsFocused(true)}
        onEndEditing={() => setIsFocused(false)}
        onChangeText={(text) => {
          setTempInputValue(text);

          if (onChangeText) {
            onChangeText(text);
          }
        }}
        value={value}
        {...props}
      />
      <View style={styles.errorContainer}>
        <Text style={styles.error}>{errors}</Text>
        <Text
          style={
            isWrong
              ? [styles.charCounter, { color: "red" }]
              : styles.charCounter
          }
        >
          {charLimit - tempInputValue.length}
        </Text>
      </View>
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
  errorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  error: {
    color: "red",
    paddingTop: 5,
    fontSize: 14.2,
  },
  charCounter: {
    color: "#505050",
    paddingTop: 5,
    fontSize: 15,
    fontFamily: "TwitterChirp",
  },
  wrongUnderline: {
    borderBottomColor: "red",
  },
  selected: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
});

export default CharLimitedInput;
