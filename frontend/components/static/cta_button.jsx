var React = require('react');
var Link = require('react-router').Link;

var CtaButton = React.createClass({
  redirectToGetInTouch: function(){
    
  },
  render: function(){
    return (
      <Link className="cta-container" to="/get_in_touch"><button className="cta center-block" >Start Training</button></Link>
    )
  }
});
module.exports = {
  CtaButton: CtaButton
}