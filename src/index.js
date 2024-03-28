import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

// Add the link to SplideJS CSS here
const splideCssLink = document.createElement("link");
splideCssLink.rel = "stylesheet";
splideCssLink.href =
  "https://unpkg.com/@splidejs/splide@4.1.3/dist/css/themes/splide-default.min.css";
document.head.appendChild(splideCssLink);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <Provider store={store}>
    <Toaster position="top-center" reverseOrder={false} />
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);
