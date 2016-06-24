var React = require('react');

var GetInTouch = React.createClass({
  render: function(){
    return(
      <div className="google-forms-container">
        <iframe src="https://docs.google.com/forms/d/1c-xptAz-1NL6yORkYj8XA1r_gGHYT8HaLn69zyVfDcE/viewform?embedded=true"></iframe>
      </div>
    )
  }
  
});

module.exports = {
  GetInTouch: GetInTouch
}