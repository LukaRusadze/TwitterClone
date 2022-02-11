import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import InputField, { InputFieldProps } from "../Atoms/InputField";
import { Formik } from "formik";

interface Props extends InputFieldProps {
  wrongColor: string;
  value: string;
  error?: string;
  maxLength?: number;
}

const RegisterNameField: React.FC<Props> = ({
  wrongColor,
  onChangeText,
  value,
  error,
  maxLength,
  ...props
}) => {
  const charLimit = maxLength === undefined ? 30 : maxLength;
  const remainingAmount = charLimit - value.length;
  const [isWrong, setIsWrong] = useState(error?.length != 0 ? true : false);

  useEffect(() => {
    if (error !== undefined) {
      if (error.length != 0) {
        setIsWrong(true);
      } else {
        setIsWrong(false);
      }
    }
  });

  return (
    <View>
      <InputField onChangeText={onChangeText} placeholder="Name" {...props} />
      <View style={styles.errorAndChatCounter}>
        <Text style={{ ...styles.errorMessage, color: wrongColor }}>
          {isWrong && error}
        </Text>
        <Text
          style={
            isWrong
              ? { ...styles.charCounter, color: wrongColor }
              : styles.charCounter
          }
        >
          {remainingAmount}
        </Text>
      </View>
    </View>
  );
};

export default RegisterNameField;

const styles = StyleSheet.create({
  charCounter: {
    alignSelf: "flex-end",
    paddingTop: 5,
    color: "#404040",
    fontFamily: "Roboto-Regular",
    fontSize: 14.9,
  },
  errorAndChatCounter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  errorMessage: {
    paddingTop: 5,
    fontSize: 14.9,
  },
});
