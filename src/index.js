import React from "react";
import b2cauth from "react-azure-adb2c";
import ReactDOM from "react-dom";
import App from "./App/App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

b2cauth.initialize({
    instance: "https://login.microsoftonline.com/6ae2c896-b2ab-435f-8566-cb73809426a9",
    // tenant: "uoksetu.onmicrosoft.com",
    tenant: "distributedproject.onmicrosoft.com",
    signInPolicy: "B2C_1_react_signup",
    // applicationId: "1278766e-5c26-4964-842d-6f5f50494992",
    applicationId: "998cf93e-6404-42e8-80a4-bab5c302d432",
    cacheLocation: "sessionStorage",
    // scopes: ["https://uoksetu.onmicrosoft.com/api/user_impersonation"],
    scopes: ["https://distributedproject.onmicrosoft.com/api/user_impersonation"],
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
});

b2cauth.run(() => {
    ReactDOM.render( < App / > , document.getElementById("root"));
    serviceWorker.unregister();
});

serviceWorker.unregister();