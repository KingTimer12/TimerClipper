import ReactDOM from "react-dom/client";
import App from "./App";
import { Theme } from "@radix-ui/themes";

import './index.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <html>
    <body>
      <Theme appearance="dark" panelBackground="solid">
        <App />
      </Theme>
    </body>
  </html>,
);
