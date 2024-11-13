import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import Liquid from "./liquid/Liquid";
import Pod from "./pod/Pod";
import Cartridge from "./cartridge/Cartridge";
import Form from "./sendForm/form";
import Availability from "./availability/availability"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/liquid" element={<Liquid />} />
        <Route path="/pod" element={<Pod />} />
        <Route path="/cartridge" element={<Cartridge />} />
        <Route path="/form" element={<Form />} />
        <Route path="/availability" element={<Availability />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
