import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.js'
import {ProductProvider} from './Context';
import {BrowserRouter as Router} from 'react-router-dom';



ReactDOM.render(
	<ProductProvider>
		<Router>
			<App />
		</Router>
	</ProductProvider>, 
	document.getElementById('root')
);
