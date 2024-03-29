import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Details from './Details';
import Cart from './Cart/Cart';
import Default from './Default';
import Modal from './Modal';

class App extends Component{
	render(){
		
		return(
			<React.Fragment>
				<Navbar />
				<Switch>
					<Route exact path="/" component={ProductList} />
					<Route path="/details" component={Details} />
					<Route path="/cart" component={Cart} />
					<Route component={Default} />
				</Switch>
				<Modal />
			</React.Fragment>
		)
	}
}

export default App;
