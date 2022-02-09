import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import InputField from "../Atoms/InputField";

interface Props {
  wrongColor: string;
}

const RegisterNameField = ({ wrongColor }: Props) => {
  const [value, setValue] = useState("");
  const charLimit = 50;
  const remainingAmount = charLimit - value.length;
  const [isWrong, setIsWrong] = useState(false);

  return (
    <View>
      <InputField
        setInputValue={setValue}
        placeholder="Name"
        filter={(value) => value.length > charLimit}
        wrongColor={wrongColor}
        setWrongOutput={setIsWrong}
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
