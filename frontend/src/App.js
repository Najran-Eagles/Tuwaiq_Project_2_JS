import React from "react";
// import SignUp from "./components/signInUp/SignUp";
// import Footer from "./components/footer/footer";
import Header from "./components/header/head";
import Navigation from "./components/navigation/nav";
import SignIn from "./components/signInUp/SignIn";
// import { Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      {/* <Navigation /> */}
	  <Header />
	  <SignIn />

    </div>
  );
}
