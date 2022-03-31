import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { NavigationStackGenericProp } from "../types/stackNavigation";
import RegisterNavigation from "../components/Organisms/RegisterNavigation";
import { Field, FieldProps, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import CharLimitedInput from "../components/Atoms/CharLimitedInput";
import DateInput from "../components/Molecules/DateInput";
import ValidatedInput from "../components/Atoms/ValidatedInput";
import useTwitterHeader from "../hooks/useTwitterHeader";
import { useAppDispatch } from "../types/redux";
import { saveUser } from "../store/features/account/accountSlice";
import firestore from "@react-native-firebase/firestore";
import { getUserByEmail } from "../utils/firebase/getData";
import { useDebounce } from "../hooks/useDebounce";

const phoneNumberRegex = /^[+]?([0-9]*[.\s\-()]|[0-9]+){3,24}$/;
const maxNameLength = 50;
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .max(maxNameLength, "Must be 50 characters or fewer")
    .required(" "),
  phoneNumber: Yup.string().matches(
    phoneNumberRegex,
    "Please enter a valid phone number.",
  ),
  email: Yup.string().email(" "),
  dateOfBirth: Yup.number(),
});

interface formikValues {
  name: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: number;
}

const UserCreation = () => {
  const navigation =
    useNavigation<NavigationStackGenericProp<"UserCreation">>();
  const dispatch = useAppDispatch();

  useTwitterHeader(navigation);

  const [emailToggle, setEmailToggle] = useState(false);
  const [isEmailToggleVisible, setIsEmailToggleVisible] = useState(false);
  const [formik, setFormik] = useState<formikValues | null>(null);
  const formikRef = useRef<FormikProps<formikValues> | null>(null);
  const [isEmailTaken, setIsEmailTaken] = useState<boolean>(true);

  function handleFormikRef(node: FormikProps<formikValues> | null) {
    if (node !== null) {
      setFormik(node.values);
      formikRef.current = node;
    }
  }

  const debouncedEmail = useDebounce(formik?.email, 2000);

  useEffect(() => {
    if (debouncedEmail) {
      getUserByEmail(debouncedEmail).then((snapshot) => {
        if (!snapshot.docs.length) return setIsEmailTaken(false);

        formikRef.current?.setErrors({
          email: "This email is already in use",
        });
      });
    }
  }, [debouncedEmail]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Create your account</Text>
      <Formik
        innerRef={handleFormikRef}
        initialValues={{
          name: "",
          phoneNumber: "",
          email: "",
          dateOfBirth: Date.now(),
        }}
        onSubmit={(values) => {
          dispatch(saveUser(values));
          navigation.navigate("CustomizeExperience");
        }}
        validationSchema={SignupSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldValue }) => {
          return (
            <>
              <View style={styles.container}>
                <View style={[styles.content, styles.padding]}>
                  <Field name="name">
                    {({ field }: FieldProps) => {
                      return (
                        <CharLimitedInput
                          style={styles.charLimitedInput}
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
                      {({ field }: FieldProps) => {
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
                      {({ field }: FieldProps) => {
                        return (
                          <ValidatedInput
                            onChangeText={(value) => {
                              setFieldValue(field.name, value);
                              setIsEmailTaken(true);
                            }}
                            value={field.value}
                            keyboardType="email-address"
                            autoComplete="off"
                            autoCapitalize="none"
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
                  {({ field }: FieldProps) => {
                    return (
                      <DateInput field={field} setFieldValue={setFieldValue}>
                        <KeyboardAvoidingView
                          behavior={
                            Platform.OS === "ios" ? "padding" : "height"
                          }
                        >
                          <RegisterNavigation
                            isSeparatorVisible={false}
                            isEmailInput={emailToggle}
                            isEmailToggleVisible={isEmailToggleVisible}
                            onEmailToggle={() =>
                              setEmailToggle((state) => !state)
                            }
                            onPress={() => handleSubmit()}
                            isNextActive={
                              Object.keys(errors).length === 0 && !isEmailTaken
                            }
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
    </SafeAreaView>
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
    fontFamily: "Chirp-Bold",
    paddingTop: 13,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 30,
    marginBottom: 30,
    color: "black",
  },
  formContainer: {},
  inputField: {},
  charLimitedInput: {
    marginBottom: 25,
  },
});
