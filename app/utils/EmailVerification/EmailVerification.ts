import { store } from "../../store/store";
import axios from "axios";
import { RequestConfig } from "./requestConfig";
import { EmailRequestConfig } from "../../types/axios";
import { emailTemplate } from "./emailTemplate";
import { Alert, Platform, ToastAndroid } from "react-native";
export function verifyEmail(setEmailCode: Function) {
  const registrationValues = store.getState().account;

  const randomNumber = Math.floor(100000 + Math.random() * 900000);

  const emailConfig: EmailRequestConfig = {
    from: "clonedtotallyrealtwitter@gmail.com",
    to: registrationValues.email,
    subject: randomNumber + " is your Twitter verification code",
    value: emailTemplate(randomNumber),
  };

  setEmailCode(randomNumber);

  axios(RequestConfig(emailConfig)).catch((error) =>
    Platform.OS === "android"
      ? ToastAndroid.show("Failed to send email: " + error, ToastAndroid.LONG)
      : Alert.alert("Failed to send email: " + error)
  );
}
