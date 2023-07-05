import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { NewsProvider } from "./Providers/NewsContexts/NewsContexts.tsx";
import { UserProvider } from "./Providers/UserContexts/UserContexts.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <NewsProvider>
          <App />
        </NewsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
