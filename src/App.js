import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../src/styles/App.css";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
        <Route path="/about">
        </Route>
    </BrowserRouter>

  )
}

export default App;


