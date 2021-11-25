import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";


import App from "./App";
import Navigation from "./components/navigation/nav";
// import Header from "./components/header/head";
import SignIn from "./components/signInUp/SignIn";
import Footer from "./components/footer/footer";
import SignUp from "./components/signInUp/SignUp";

// import provider
// import store

ReactDOM.render(
  // The provider will enable the child components to access the store
  <BrowserRouter>
  <Navigation />
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route pth="SignUp" element={<SignUp/>}/> */}
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
