import { render } from "react-dom";
import { Theme } from "@twilio-paste/theme";

import { App } from "./App";

import "./styles.css";

const rootElement = document.getElementById("root");
render(
  <Theme.Provider theme="default">
    <App />
  </Theme.Provider>,
  rootElement
);
