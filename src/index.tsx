import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />} />
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);
