/* @refresh reload */
import { render } from "solid-js/web";

// styles
import "./index.css";
import "tailwindcss/tailwind.css";

import App from "./App";

render(() => <App />, document.getElementById("root") as HTMLElement);
