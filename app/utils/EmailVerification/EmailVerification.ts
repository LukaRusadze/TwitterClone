import { store } from "../../store/store";
import axios from "axios";
import { RequestConfig } from "./requestConfig";
import { EmailRequestConfig } from "../../types/axios";
import { emailTemplate } from "./emailTemplate";

export function verifyEmail() {
  const registrationValues = store.getState().account;

  const randomNumber = Math.floor(100000 + Math.random() * 900000);

  const emailConfig: EmailRequestConfig = {
    from: "clonedtotallyrealtwitter@gmail.com",
    to: registrationValues.email,
    subject: randomNumber + " is your Twitter verification code",
    value: emailTemplate(randomNumber),
  };

  axios(RequestConfig(emailConfig))
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}
