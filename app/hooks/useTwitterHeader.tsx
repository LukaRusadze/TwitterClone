import React, { useLayoutEffect } from "react";
import { colors } from "../config/colors";
import { Ionicons } from "@expo/vector-icons";
import { NavigationStackGenericProp } from "../types/types";

const useTwitterHeader = (
  navigation: NavigationStackGenericProp<
    "CustomizeExperience" | "UserCreation" | "ConfirmSignUp"
  >
) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      headerShadowVisible: false,
      headerLeft: () => (
        <Ionicons
          name="md-arrow-back"
          size={25}
          color={colors.primary}
          onPress={navigation.goBack}
        />
      ),
      headerTitle: () => (
        <Ionicons name="logo-twitter" size={24} color={colors.primary} />
      ),
    });
  });
};

export default useTwitterHeader;
