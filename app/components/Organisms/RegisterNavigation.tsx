import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  GestureResponderEvent,
} from "react-native";
import CustomButton, { CustomButtonProps } from "../Atoms/CustomButton";

interface Props extends CustomButtonProps {
  isNextActive: boolean;
  isEmailInput: boolean;
  onEmailToggle?: ((event: GestureResponderEvent) => void) | undefined;
}

const RegisterNavigation = ({
  isNextActive,
  onPress,
  onEmailToggle,
  isEmailInput,
}: Props) => {
  // useEffect(() => {
  //   console.log(isEmailInput);
  // });
  return (
    <KeyboardAvoidingView style={styles.container}>
      <CustomButton onPress={onEmailToggle}>
        {isEmailInput ? "Use email instead" : "Use phone instead"}
      </CustomButton>
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
    justifyContent: "space-between",
  },
  nextBtn: {
    backgroundColor: "black",
    borderColor: "black",
    alignSelf: "flex-end",
  },
  nextBtnText: {
    color: "white",
  },
});

export default RegisterNavigation;
