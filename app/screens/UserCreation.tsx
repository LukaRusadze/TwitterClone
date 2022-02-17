import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { NavigationStackGenericProp } from "../types/types";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/colors";
import RegisterNavigation from "../components/Organisms/RegisterNavigation";
import { Field, FieldProps, Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import CharLimitedInput from "../components/Atoms/CharLimitedInput";
import DateInput from "../components/Molecules/DateInput";
import ValidatedInput from "../components/Atoms/ValidatedInput";

const phoneNumberRegex = /^[+]?([0-9]*[\.\s\-\(\)]|[0-9]+){3,24}$/;
const maxNameLength = 50;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .max(maxNameLength, "Must be 50 characters or fewer")
    .required(" "),
  phoneNumber: Yup.string().matches(
    phoneNumberRegex,
    "Please enter a valid phone number."
  ),
  email: Yup.string().email(" "),
  dateOfBirth: Yup.date(),
});

const UserCreation = () => {
  const navigation = useNavigation<NavigationStackGenericProp<"Register">>();

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

  const [emailToggle, setEmailToggle] = useState(false);
  const [isEmailToggleVisible, setIsEmailToggleVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Create your account</Text>
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
          email: "",
          dateOfBirth: new Date(),
        }}
        onSubmit={(values) =>
          navigation.navigate("CustomizeExperience", values)
        }
        validationSchema={SignupSchema}
      >
        {({ handleChange, handleSubmit, values, errors, setFieldValue }) => {
          return (
            <>
              <View style={styles.container}>
                <View style={[styles.content, styles.padding]}>
                  <Field name="name">
                    {({ field, form, meta }: FieldProps) => {
                      return (
                        <CharLimitedInput
                          style={{ marginBottom: 25 }}
                          placeholder="Name"
                          wrongColor={"red"}
                          onChangeText={handleChange(field.name)}
                          value={field.value}
                          errors={errors.name}
                          required={true}
                          charLimit={50}
                        />
                      );
                    }}
                  </Field>
                  {emailToggle ? (
                    <Field name="phoneNumber">
                      {({ field, form, meta }: FieldProps) => {
                        return (
                          <ValidatedInput
                            onChangeText={handleChange(field.name)}
                            value={field.value}
                            keyboardType="number-pad"
                            placeholder="Phone"
                            errors={errors.phoneNumber}
                            onFocus={() => {
                              if (setIsEmailToggleVisible) {
                                setIsEmailToggleVisible(true);
                              }
                            }}
                            onEndEditing={() => {
                              if (setIsEmailToggleVisible) {
                                setIsEmailToggleVisible(false);
                              }
                            }}
                          />
                        );
                      }}
                    </Field>
                  ) : (
                    <Field name="email">
                      {({ field, form, meta }: FieldProps) => {
                        return (
                          <ValidatedInput
                            onChangeText={handleChange(field.name)}
                            value={field.value}
                            keyboardType="email-address"
                            placeholder="Email"
                            errors={errors.email}
                            onFocus={() => {
                              if (setIsEmailToggleVisible) {
                                setIsEmailToggleVisible(true);
                              }
                            }}
                            onEndEditing={() => {
                              if (setIsEmailToggleVisible) {
                                setIsEmailToggleVisible(false);
                              }
                            }}
                          />
                        );
                      }}
                    </Field>
                  )}
                </View>
                <Field name="dateOfBirth">
                  {({ field, form, meta }: FieldProps) => {
                    return (
                      <DateInput field={field} setFieldValue={setFieldValue}>
                        <KeyboardAvoidingView
                          behavior={Platform.OS == "ios" ? "padding" : "height"}
                        >
                          <RegisterNavigation
                            isSeparatorVisible={false}
                            isEmailInput={emailToggle}
                            isEmailToggleVisible={isEmailToggleVisible}
                            onEmailToggle={() =>
                              setEmailToggle((state) => !state)
                            }
                            onPress={() => handleSubmit()}
                            isNextActive={Object.keys(errors).length === 0}
                          />
                        </KeyboardAvoidingView>
                      </DateInput>
                    );
                  }}
                </Field>
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default UserCreation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 90,
    flex: 1,
    justifyContent: "flex-end",
  },
  padding: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  headerText: {
    fontFamily: "TwitterChirp-Bold",
    paddingTop: 13,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 30,
    marginBottom: 30,
  },
  formContainer: {},
  inputField: {},
});
