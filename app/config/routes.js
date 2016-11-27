var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Card = require("../components/Card");
var About = require("../components/About");

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Card} />
    <Route path='about' component={About} />
  </Router>
);

module.exports = routes;
