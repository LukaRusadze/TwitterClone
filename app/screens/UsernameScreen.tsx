import React, { useLayoutEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { RootStackParamList } from "../types/navigationTypes";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/colors";
import LoginGetStarted from "../components/Molecules/LoginGetStarted";
import LoginNavigation from "../components/Organisms/LoginNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteProp } from "@react-navigation/native";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList>;
}

const UsernameScreen = ({ navigation, route }: Props) => {
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
    <View style={styles.container}>
      <LoginGetStarted output={setUsername} setIsNextActive={setIsNextActive} />
      <SafeAreaView>
        <LoginNavigation
          navigation={navigation}
          route={route}
          navigationProps={{ username: username }}
          isNextActive={isNextActive}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
  },
});

export default UsernameScreen;
