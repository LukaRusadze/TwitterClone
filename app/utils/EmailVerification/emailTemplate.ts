export function emailTemplate(code: number): string {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      
      <style>
    body {
      display: flex;
      justify-content: center;
      background-color: rgb(245, 248, 250);
    }
    div {
      box-sizing: border-box;
      width: 450px;
      background-color: #fff;
      padding: 24px;
      display: flex;
      flex-direction: column;
    }
    img {
      align-self: flex-end;
      margin: 0px;
      padding: 0px;
      display: inline-block;
      border: none;
      outline: none;
    }
    h1 {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 24px;
    }
    p {
      font-family: "Helvetica Neue Light", Helvetica, Arial, sans-serif;
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 0;
    }
    strong {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-weight: bold;
      line-height: 36px;
      font-size: 32px;
      margin-bottom: 6px;
      margin-top: 0;
    }
    span {
      font-family: "Helvetica Neue Light", Helvetica, Arial, sans-serif;
      font-size: 14px;
      line-height: 18px;
      margin: 0;
    }
    small {
      font-family: "Helvetica Neue Light", Helvetica, Arial, sans-serif;
      font-size: 16px;
      line-height: 22px;
      margin-top: 24px;
      margin-bottom: 80px;
    }
    sup {
      text-decoration: none;
      border-style: none;
      border: 0px;
      padding: 0px;
      margin: 0px;
      text-decoration: none;
      font-family: "Helvetica Neue Light", Helvetica, Arial, sans-serif;
      font-size: 12px;
      line-height: 16px;
      font-weight: bold;
      text-align: center;
      color: #657786;
      margin-bottom: 12px;
    }
    sup a {
      color: #8899a6;
    }
    sub {
      padding: 0px;
      margin: 0px auto;
      font-family: "Helvetica Neue Light", Helvetica, Arial, sans-serif;
      font-size: 12px;
      padding: 0px;
      margin: 0px;
      font-weight: normal;
      line-height: 16px;
      text-align: center;
      margin: auto;
      color: #8899a6;
    }
  </style>
  
    </head>
    <body>
      <div>
        <img
          height="27"
          width="32"
          src="https://ci5.googleusercontent.com/proxy/ObVgYJQgSjo41l1NQLa34y0cx059F8lNASu5OoCyxyuCxcV7dd5weiertHgR-sX4Sez9dT6iROiAH7iNxp3aDP98pJwyMQJY15cXJDykaOqgncPl=s0-d-e1-ft#https://ea.twimg.com/email/self_serve/media/icon_twitter_blue.png"
        />
        <h1>Confirm your email address</h1>
        <p>
          There’s one quick step you need to complete before creating your Twitter
          account. Let’s make sure this is the right email address for you —
          please confirm this is the right address to use for your new account.
        </p>
        <p>Please enter this verification code to get started on Twitter:</p>
        <strong>${code}</strong>
        <span>Verification codes expire after two hours.</span>
  
        <small>Thanks, <br />Twitter</small>
  
        <sup><a>Help</a> | <a>Email security tips</a></sup>
  
        <sub
          >Twitter, ﻿Inc. ﻿1355 ﻿Market ﻿Street, ﻿Suite ﻿900 ﻿San Francisco, CA
          94103
        </sub>
      </div>
    </body>
  </html>
  
  
  `;
}
