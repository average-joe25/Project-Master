import "./index.css";
import App from "./App";
import React from "react";
import { AuthContextProvider } from "./context/AuthContext";
import { render } from "react-dom";
 
const container = document.getElementById("root");
render(
  <React.StrictMode>
  <AuthContextProvider>
    <App/>
    </AuthContextProvider>
    </React.StrictMode>
,container);