var React = require('react');
var IndexLink = require('react-router').IndexLink;
var NavLink = require('./links/nav_link.jsx').NavLink;

var App = React.createClass({
  render: function(){
    return(
      <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
      
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">PosiFitness</a>
          </div>

    
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
              <li><NavLink to="/about">About PosiFitness</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/personal_training">Personal Training</NavLink></li>
            </ul>
          </div>
      
        </div>
      </nav>
      {this.props.children}
      </div>
    )
  }
});

module.exports = {
  App: App
}