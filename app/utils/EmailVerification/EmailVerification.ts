import { store } from "../../store/store";
import axios from "axios";

const API_KEY =
  "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";

const msg = {
  to: "rusadzeluka@gmail.com", // Change to your recipient
  from: "clonedtotallyrealtwitter@gmail.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

export function verifyEmail() {
  const registrationValues = store.getState().account;

  axios({
    method: "POST",
    url: "https://api.sendgrid.com/v3/mail/send",
    headers: {
      Authorization: "Bearer " + API_KEY,
      "Content-Type": "application/json",
    },
    data: {
      personalizations: [
        {
          to: [{ email: "rusadzeluka@gmail.com" }],
          subject: "Hello AMERICA",
        },
      ],
      from: {
        email: "clonedtotallyrealtwitter@gmail.com",
        name: "TwitterClone",
      },
      content: [
        {
          type: "text/html",
          value: Object.values(registrationValues).join(" "),
        },
      ],
    },
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}
