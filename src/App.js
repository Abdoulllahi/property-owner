import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./header/NavBar";
import RouterPage from "./router/RouterPage";
import axios from "axios";
import "./App.css";

const App = () => {
  axios.defaults.baseURL = "http://localhost:8080";

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <RouterPage />
      </BrowserRouter>
    </div>
  );
};

export default App;
