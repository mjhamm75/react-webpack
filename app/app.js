/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;

var App = require('./components/test.js');

React.renderComponent(
	<Routes>
		<Route path="/" handler={App}></Route>
	</Routes>,
	document.getElementById('example')
);