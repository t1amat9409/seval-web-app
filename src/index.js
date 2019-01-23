import React from "react";
import ReactDOM from "react-dom";
import ReactNative, { AppRegistry } from "react-native";
import App from "./components/App";
import "./styles.css";

const rootElement = document.getElementById("root");

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", { rootTag: rootElement });
