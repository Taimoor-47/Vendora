// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Shop from "./Pages/Shop";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Assets/banner_mens.png";
import women_banner from "./Assets/banner_women.png";
import kids_banner from "./Assets/banner_kids.png";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/women" element={<ShopCategory banner={women_banner} category="women"/> }  />
        <Route path="/men" banner={men_banner} element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path="/kids" banner={kids_banner} element={<ShopCategory banner={kids_banner} category="kid"/>} />
        <Route path="/login" element={<LoginSignup />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
