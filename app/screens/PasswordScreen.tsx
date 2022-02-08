import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { RootStackParamList } from "../../App";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/colors";
import LoginNavigation from "../components/LoginNavigation";
import InputField from "../components/InputField";
import { RouteProp } from "@react-navigation/native";
import PasswordField from "../components/PasswordField";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "Password">;
  route: RouteProp<RootStackParamList, "Password">;
}

const PasswordScreen = ({ route, navigation }: Props) => {
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

  useEffect(() => {
    if (passwordField) {
      setIsNextActive(true);
    } else {
      setIsNextActive(false);
    }
  });

  const { username } = route.params;

  const [isNextActive, setIsNextActive] = useState(false);
  const [usernameField, setUsernameField] = useState(username);
  const [passwordField, setPasswordField] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Enter your password</Text>

        <View style={styles.usernameContainer} pointerEvents="none">
          <InputField
            value={usernameField}
            setInputValue={() => null}
            style={styles.input}
            placeholder="Username"
          />
        </View>

        <PasswordField setInputValue={setPasswordField} />
      </View>

      <LoginNavigation
        isNextActive={isNextActive}
        navigation={navigation}
        route={route}
      />
    </View>
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
