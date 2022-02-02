import React, { useLayoutEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { RootStackParamList } from "../../App";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/colors";
import LoginGetStarted from "../components/LoginGetStarted";
import LoginNavigation from "../components/LoginNavigation";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "Login">;
}

const LoginScreen = ({ navigation }: Props) => {
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

  return (
    <View style={styles.container}>
      <LoginGetStarted setIsNextActive={setIsNextActive} />
      <LoginNavigation navigation={navigation} isNextActive={isNextActive} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
  },
});

export default LoginScreen;
