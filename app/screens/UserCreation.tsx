import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { NavigationStackGenericProp } from "../types/types";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../config/colors";
import RegisterNavigation from "../components/Organisms/RegisterNavigation";
import InputField from "../components/Atoms/InputField";
import { Field, FieldProps, Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import CharLimitedInput from "../components/Atoms/CharLimitedInput";
import EmailNumberInput from "../components/Molecules/EmailNumberInput";

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

  const [isNextActive, setIsNextActive] = useState(false);
  const [emailToggle, setEmailToggle] = useState(false);

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
    email: Yup.string().email(),
    dateOfBirth: Yup.string(),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Create your account</Text>
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
          email: "",
          dateOfBirth: "",
        }}
        validateOnMount={true}
        onSubmit={(values) => console.log(values)}
        validationSchema={SignupSchema}
      >
        {({ handleChange, handleSubmit, values, errors }) => {
          useEffect(() => {
            setIsNextActive(Object.keys(errors).length === 0);
          }, [errors]);

          return (
            <>
              <View style={styles.content}>
                <Field name="name">
                  {({ field, form, meta }: FieldProps) => {
                    return (
                      <CharLimitedInput
                        style={{ marginBottom: 20 }}
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
                <Field name="phoneNumber">
                  {({ field, form, meta }: FieldProps) => {
                    return (
                      <EmailNumberInput
                        isEmailInput={emailToggle}
                        onChangeText={handleChange(field.name)}
                        value={values.phoneNumber}
                        errors={errors.phoneNumber}
                      />
                    );
                  }}
                </Field>
                <Field name="dateOfBirth">
                  {({ field, form, meta }: FieldProps) => {
                    return (
                      <InputField
                        style={styles.inputField}
                        onChangeText={handleChange(field.name)}
                        value={field.value}
                        placeholder="Date of birth"
                      />
                    );
                  }}
                </Field>
              </View>
              <KeyboardAvoidingView>
                <RegisterNavigation
                  isEmailInput={emailToggle}
                  onEmailToggle={() => setEmailToggle((state) => !state)}
                  onPress={() => handleSubmit()}
                  isNextActive={isNextActive}
                />
              </KeyboardAvoidingView>
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
    paddingTop: 13,
    paddingLeft: 40,
    paddingRight: 40,
    flex: 1,
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
  inputField: {
    marginTop: 26,
  },
});
