import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacityProps,
} from "react-native";
import { RootStackParamList } from "../../types/navigationTypes";
import CustomButton from "../Atoms/CustomButton";

interface Props extends TouchableOpacityProps {
  isNextActive: boolean;
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const RegisterNavigation = ({ isNextActive, onPress }: Props) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <CustomButton
        style={styles.nextBtn}
        textStyle={styles.nextBtnText}
        enabled={isNextActive}
        onPress={onPress}
      >
        Next
      </CustomButton>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: "#e3e3e3",
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  nextBtn: {
    backgroundColor: "black",
    borderColor: "black",
  },
  nextBtnText: {
    color: "white",
  },
});

export default RegisterNavigation;
