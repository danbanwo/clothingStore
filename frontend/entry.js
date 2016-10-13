import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import store from './store';
import CartContainer from './components/cart_container.js'
import Clothing from './components/clothing.jsx'

const App = () => (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Clothing}/>
			<Route path="/cart" component={CartContainer}/>
		</Router>
	</Provider>
)


document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
});
