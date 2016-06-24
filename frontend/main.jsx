var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HashHistory = require('react-router').hashHistory;

var App = require('./components/app.jsx').App;
var Home = require('./components/static/home.jsx').Home;
var About = require('./components/static/about.jsx').About;
var Services = require('./components/static/services.jsx').Services;
var PersonalTraining = require('./components/static/personal_training.jsx').PersonalTraining;
var GetInTouch = require('./components/static/get_in_touch.jsx').GetInTouch;

var routes = (
    <Route path="/" component={App}>
  
        <IndexRoute component={Home}/>
        
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/personal_training" component={PersonalTraining} />
        <Route path="/get_in_touch" component={GetInTouch} />
  
    </Route>
  
  
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router history={HashHistory}>{routes}</Router>,
    document.getElementById('app')
  );
});