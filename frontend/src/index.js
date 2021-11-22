import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// import signUp from './components/registaration/signUp';
import App from './App';
import Navigation from './components/navigation/nav';
import Header from './components/header/head';

// import provider
// import store

ReactDOM.render(
  // The provider will enable the child components to access the store
	<Router>
		<Navigation/>
		<Header />
		<App />
		
	</Router>,
  document.getElementById("root")
);