import React, { useLayoutEffect } from "react";
import { colors } from "../config/colors";
import { Ionicons } from "@expo/vector-icons";
import { NavigationStackGenericProp } from "../types/stackNavigation";

const useTwitterHeader = (
  navigation: NavigationStackGenericProp<
    | "CustomizeExperience"
    | "UserCreation"
    | "ConfirmSignUp"
    | "EmailVerification"
    | "RegistrationPassword"
  >,
  backButton = true,
  iconSize = 24
) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      headerShadowVisible: false,
      headerLeft: () =>
        backButton ? (
          <Ionicons
            name="md-arrow-back"
            size={25}
            color={colors.primary}
            onPress={navigation.goBack}
          />
        ) : null,
      headerTitle: () => (
        <Ionicons name="logo-twitter" size={iconSize} color={colors.primary} />
      ),
    });
  });
};

export default useTwitterHeader;
