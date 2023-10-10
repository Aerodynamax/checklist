import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
if (!link) {
  link = document.createElement("link");
  link.rel = "icon";
  document.head.appendChild(link);
}

link.href = import.meta.env.DEV
  ? "https://img.icons8.com/windows/512/FF0000/dev.png"
  : "https://img.icons8.com/cotton/512/checklist--v1.png";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
