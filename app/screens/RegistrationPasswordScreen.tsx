import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import useTwitterHeader from "../hooks/useTwitterHeader";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackGenericProp } from "../types/stackNavigation";
import RegisterNavigation from "../components/Organisms/RegisterNavigation";
import { Field, FieldProps, Formik } from "formik";
import * as Yup from "yup";
import ValidatedPasswordField from "../components/Molecules/ValidatedPasswordField";
import { savePassword } from "../store/features/account/accountSlice";
import { useAppDispatch } from "../types/redux";
import { RegisterUser } from "../utils/firebase/authorization";

interface Props {}

const RegistrationPasswordScreen = ({}: Props) => {
  const navigation =
    useNavigation<NavigationStackGenericProp<"RegistrationPassword">>();
  const dispatch = useAppDispatch();

  useTwitterHeader(navigation, false, 30);

  const PasswordSchema = Yup.object().shape({
    password: Yup.string().min(
      8,
      "Your password needs to be at least 8 characters. Please enter a longer one.",
    ),
  });

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          password: "",
        }}
        onSubmit={async (values) => {
          dispatch(savePassword(values.password));
          await RegisterUser();
          navigation.navigate("ProfilePicture");
        }}
        validationSchema={PasswordSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <Field name="password">
            {({ field }: FieldProps) => (
              <>
                <View style={styles.content}>
                  <Text style={styles.headerText}>You'll need a password</Text>
                  <Text style={styles.prompt}>
                    Make sure it's 8 characters or more.
                  </Text>
                  <ValidatedPasswordField
                    style={styles.input}
                    setInputValue={handleChange(field.name)}
                    errors={errors.password}
                  />
                </View>
                <KeyboardAvoidingView>
                  <RegisterNavigation
                    isEmailToggleVisible={false}
                    isNextActive={
                      errors.password === undefined && field.value
                        ? true
                        : false
                    }
                    isEmailInput={false}
                    onPress={() => handleSubmit()}
                  />
                </KeyboardAvoidingView>
              </>
            )}
          </Field>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default RegistrationPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerText: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    marginTop: 12,
    color: "black",
  },
  prompt: {
    fontFamily: "Roboto-Regular",
    marginTop: 10,
    color: "#606060",
  },
  input: {
    marginTop: 18,
  },
});
