import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import {
  NavigationStackGenericProp,
  RouteGenericProp,
} from "../../types/types";
import CustomButton from "../Atoms/CustomButton";

interface Props {
  isNextActive: boolean;
  navigationProps?: object;
  setSubmit?: Function;
}

const LoginNavigation = ({
  isNextActive,
  navigationProps,
  setSubmit,
}: Props) => {
  const navigation =
    useNavigation<NavigationStackGenericProp<"Username" | "Password">>();
  const route = useRoute<RouteGenericProp<"Username" | "Password">>();

  const handleNextButton = () => {
    return navigation.navigate("Password", { ...navigationProps });
  };

  const handleLogin = () => {
    return setSubmit!(true);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <CustomButton>Forgot password?</CustomButton>
      <CustomButton
        style={styles.nextBtn}
        textStyle={styles.nextBtnText}
        enabled={isNextActive}
        onPress={route.name !== "Password" ? handleNextButton : handleLogin}
      >
        {route.name === "Password" ? "Log in" : "Next"}
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
  },
  nextBtnText: {
    color: "white",
  },
});

export default LoginNavigation;
