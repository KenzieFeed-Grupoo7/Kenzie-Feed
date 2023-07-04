import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { NewsProvider } from "./Providers/NewsContexts.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NewsProvider>
        <App />
      </NewsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
