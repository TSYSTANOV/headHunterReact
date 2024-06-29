import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SearchParamsApp } from "./context/SearchParamsApp";
import { ModalApp } from "./context/ModalApp";
import { ModalVacancyApp } from "./context/ModalVacancy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ModalVacancyApp>
      <ModalApp>
        <SearchParamsApp>
          <App />
        </SearchParamsApp>
      </ModalApp>
    </ModalVacancyApp>
  </BrowserRouter>
);
