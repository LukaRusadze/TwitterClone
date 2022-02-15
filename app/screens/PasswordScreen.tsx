import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, ToastAndroid, Platform } from "react-native";
import { NavigationStackGenericProp, RouteGenericProp } from "../types/types";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/colors";
import LoginNavigation from "../components/Organisms/LoginNavigation";
import InputField from "../components/Atoms/InputField";
import { useNavigation, useRoute } from "@react-navigation/native";
import PasswordField from "../components/Molecules/PasswordField";
import { auth } from "../firebase/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

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
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (submit) {
      const email = username + "@twitterclone.com";

      signInWithEmailAndPassword(auth, email, passwordField)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/wrong-password":
              {
                if (Platform.OS === "android") {
                  ToastAndroid.show("Wrong Password!", ToastAndroid.LONG);
                } else {
                  alert("Wrong Password!");
                }
              }
              break;
            case "auth/quota-exceeded":
              {
                if (Platform.OS === "android") {
                  ToastAndroid.show(
                    "Too many wrong passwords! Try again later",
                    ToastAndroid.LONG
                  );
                } else {
                  alert("Wrong Password!");
                }
              }
              break;
            default: {
              console.log(error.code);
            }
          }
        });
      setSubmit(false);
    }
  }, [submit]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerText}>Enter your password</Text>

        <View style={styles.usernameContainer} pointerEvents="none">
          <InputField
            value={usernameField}
            onChangeText={() => null}
            style={styles.input}
            placeholder="Username"
          />
        </View>

        <PasswordField setInputValue={setPasswordField} />
      </View>

      <LoginNavigation isNextActive={isNextActive} setSubmit={setSubmit} />
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
