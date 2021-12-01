import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/nav";
import Header from "./components/header/head";
import Footer from "./components/footer/footer";
import Dashboard from "./components/dashboard/dash";
import SignIn from "./components/signInUp/signIn";
import SignUp from "./components/signInUp/SignUp";
import Canceled from "./components/dashboard/Canceled";
import Previous from "./components/dashboard/previous";
import Available from "./components/dashboard/available";
import Result from "./components/dashboard/result";

const App = () => {
  const [name, setName] = useState();
  return (
    <div className="App">
      <Navigation name={name} setName={setName} />
      <Routes>
        <Route path="/" element={<Header setName={setName} />} />
        <Route path="dash" element={<Dashboard />}>
          <Route path="previous" element={<Previous />} />
          <Route path="result" element={<Result />} />
          <Route path="cancelled" element={<Canceled />} />
          <Route path="available" element={<Available />} />
        </Route>

        <Route path="/SignUp" element={<SignUp />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
