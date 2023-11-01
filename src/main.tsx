import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { App } from "./App.tsx";
import './App.css'
import { CartContextProvider } from "./utils/cartcontext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
  //hi
);
