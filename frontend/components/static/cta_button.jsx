var React = require('react');

var CtaButton = React.createClass({
  render: function(){
    return (
      <button className="cta center-block">Start Training</button>
    )
  }
});
module.exports = {
  CtaButton: CtaButton
}