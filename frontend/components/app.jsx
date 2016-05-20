var React = require('react');
var IndexLink = require('react-router').IndexLink;
var NavLink = require('./links/nav_link.jsx').NavLink;

var App = React.createClass({
  render: function(){
    return(
    <div>
      <h1>PosiFitness</h1>
      <ul role="nav">
        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        <li><NavLink to="/about">About PosiFitness</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/personal_training">Personal Training</NavLink></li>
      </ul>
    
      {this.props.children}
    </div>
    )
  }
});

module.exports = {
  App: App
}