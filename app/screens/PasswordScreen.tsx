import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import {
  NavigationStackGenericProp,
  RouteGenericProp,
} from "../types/stackNavigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../config/colors";
import LoginNavigation from "../components/Organisms/LoginNavigation";
import InputField from "../components/Atoms/InputField";
import { useNavigation, useRoute } from "@react-navigation/native";
import PasswordField from "../components/Molecules/PasswordField";

const PasswordScreen = () => {
  const navigation = useNavigation<NavigationStackGenericProp<"Password">>();
  const route = useRoute<RouteGenericProp<"Password">>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      headerShadowVisible: false,
      headerLeft: () => (
        <Ionicons
          name="md-close-outline"
          size={32}
          color={colors.primary}
          onPress={navigation.goBack}
        />
      ),
      headerTitle: () => (
        <Ionicons name="logo-twitter" size={30} color={colors.primary} />
      ),
    });
  });

  const { username } = route.params;

  const [isNextActive, setIsNextActive] = useState(false);
  const [passwordField, setPasswordField] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (passwordField) {
      setIsNextActive(true);
    } else {
      setIsNextActive(false);
    }
  }, [passwordField]);

  useEffect(() => {
    if (submit) {
      setSubmit(false);
    }
  }, [passwordField, submit, username]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Enter your password</Text>

        <View style={styles.usernameContainer} pointerEvents="none">
          <InputField
            value={username}
            onChangeText={() => null}
            style={styles.input}
            placeholder="Username"
          />
        </View>

        <PasswordField setInputValue={setPasswordField} />
      </View>

      <LoginNavigation isNextActive={isNextActive} setSubmit={setSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
  },
  usernameContainer: {
    marginBottom: 22,
  },
  headerText: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    marginTop: 15,
    color: "black",
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    marginTop: 26,
  },
});
export default PasswordScreen;
