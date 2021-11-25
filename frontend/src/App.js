import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/nav';
import Header from './components/header/head';
import Footer from './components/footer/footer';
import Dashboard from './components/dashboard/dash';
import SignIn from './components/signInUp/signIn';
import SignUp from './components/signInUp/SignUp';
// import Exam from'./components/exam/available'


const App =() =>{
return (
<div className="App">


       <Navigation/>
	  
        <Routes>
			<Route path="/"element={<Header/>}/>
			<Route path="/dash"element={<Dashboard/>}/>
      <Route path="/SignIn" element={<SignIn/>} />
      <Route path="/SignUp" element={<SignUp/>} />
		
		</Routes>
		
		<Footer />




</div>





)






}

export default App

