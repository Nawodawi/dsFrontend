import React from "react";
import b2cauth from "react-azure-adb2c";
import ReactDOM from "react-dom";
import App from "./App/App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

b2cauth.initialize({
    instance: "https://login.microsoftonline.com/tfp/",
    // tenant: "uoksetu.onmicrosoft.com",
    tenant: "distributedproject.onmicrosoft.com",
    signInPolicy: "B2C_1_react_signup",
    // applicationId: "1278766e-5c26-4964-842d-6f5f50494992",
    applicationId: "5da457d6-7ec6-4433-9d56-4490a8c1ecb7",
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