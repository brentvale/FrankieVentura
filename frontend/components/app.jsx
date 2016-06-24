var React = require('react');
var IndexLink = require('react-router').IndexLink;
var NavLink = require('./links/nav_link.jsx').NavLink;
var Footer = require('./static/footer.jsx').Footer;

var App = React.createClass({
  render: function(){
    return(
      <div className="container-fluid no-padding">
        <nav className="navbar navbar-inverse navbar-fixed-top">
      
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"></a>
            </div>

    
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><NavLink className="menu-item" to="/about">About PosiFitness</NavLink></li>
                <li><NavLink className="menu-item" to="/services">Services</NavLink></li>
                <li style={{display:"none"}}><NavLink className="menu-item" to="/personal_training">Personal Training</NavLink></li>
              </ul>
            </div>
      
        </nav>
      
        <div>
          {this.props.children}
        </div>
        
        <Footer />
      </div>
    )
  }
});

module.exports = {
  App: App
}