import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { RootStackParamList } from "../../App";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/colors";
import LoginNavigation from "../components/LoginNavigation";
import InputField from "../components/InputField";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "Password">;
}

const PasswordScreen = ({ navigation }: Props) => {
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

  const [isNextActive, setIsNextActive] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Enter your password</Text>
        <InputField
          style={styles.input}
          setInputValue={setUsername}
          placeholder="Username"
        />
        <InputField
          style={styles.input}
          setInputValue={setPassword}
          placeholder="Password"
        />
      </View>

      <LoginNavigation isNextActive={isNextActive} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
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
