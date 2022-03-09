import { AxiosRequestConfig } from "axios";
import { EmailRequestConfig } from "../../types/axios";
import Config from "react-native-config";

const API_KEY = Config.SENDGRID_API_KEY;

export function RequestConfig({
  from,
  to,
  subject,
  value,
}: EmailRequestConfig): AxiosRequestConfig {
  return {
    method: "POST",
    url: "https://api.sendgrid.com/v3/mail/send",
    headers: {
      Authorization: "Bearer " + API_KEY,
      "Content-Type": "application/json",
    },
    data: {
      personalizations: [
        {
          to: [{ email: to }],
          subject: subject,
        },
      ],
      from: {
        email: from,
        name: "TwitterClone",
      },
      content: [
        {
          type: "text/html",
          value: value,
        },
      ],
    },
  };
}
