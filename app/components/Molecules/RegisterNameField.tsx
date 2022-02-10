import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import InputField, { InputFieldProps } from "../Atoms/InputField";
import { Formik } from "formik";

interface Props extends InputFieldProps {
  wrongColor: string;
  value: string;
}

const RegisterNameField: React.FC<Props> = ({
  wrongColor,
  onChangeText,
  value,
  ...props
}) => {
  const charLimit = 50;
  const remainingAmount = charLimit - value.length;
  const [isWrong, setIsWrong] = useState(false);

  return (
    <View>
      <InputField
        onChangeText={onChangeText}
        placeholder="Name"
        filter={(value) => value.length > charLimit}
        wrongColor={wrongColor}
        setWrongOutput={setIsWrong}
        {...props}
      />
      <View style={styles.errorAndChatCounter}>
        <Text style={{ ...styles.errorMessage, color: wrongColor }}>
          {isWrong && "Must be 50 characters or fewer"}
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
