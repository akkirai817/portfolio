import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;