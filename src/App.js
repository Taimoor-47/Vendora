// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Shop from "./Pages/Shop";
import Kids from "./Pages/kids";
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
