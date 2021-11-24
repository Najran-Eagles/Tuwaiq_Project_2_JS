import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route} from 'react-router-dom';

// import signUp from './components/registaration/signUp';
import App from './App';
import Navigation from './components/navigation/nav';
import Header from './components/header/head';
import SignIn from './components/signInUp/s7ignIn';

// import provider
// import store

ReactDOM.render(
  // The provider will enable the child components to access the store
	<BrowserRouter>
		<Navigation/>
		<Header />
		<SignIn />
		<App />
	</BrowserRouter>,
  document.getElementById("root")
);