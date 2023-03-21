import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../config/colors";
import LoginGetStarted from "../components/Molecules/LoginGetStarted";
import LoginNavigation from "../components/Organisms/LoginNavigation";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackGenericProp } from "../types/stackNavigation";

const UsernameScreen = () => {
  const navigation = useNavigation<NavigationStackGenericProp<"Username">>();
  const [username, setUsername] = useState("");

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
    <SafeAreaView style={styles.container}>
      <LoginGetStarted output={setUsername} setIsNextActive={setIsNextActive} />
      <SafeAreaView>
        <LoginNavigation
          navigationProps={{ username: username }}
          isNextActive={isNextActive}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
  },
});

export default UsernameScreen;
