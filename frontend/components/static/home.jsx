var React = require('react');
var CtaButton = require('./cta_button.jsx').CtaButton;

var Home = React.createClass({
  render: function(){
    var p1 = "PosiFitness is a style of personal training rooted in the belief that health and wellbeing is a lifelong endeavor. Having a positive outlook while on the path to your fitness goals is just as important as reaching them. With PosiFitness training you will receive completely unique one-on-one advice, individualized and varying exercise programs, and a compassionate coach whose mission is to be there for you.";
    var p2 = "Emphasizing the physical and emotional aspects of exercise, my goal as your trainer is to create a unique training program that fits YOUR personality, schedule, and goals.";
    var p3 = "Three calls to action…";
    var p4 = "Want to see what it’s like to workout with PosiFitness? Check out this 2 minute video.";
    var p5 = "New to regular exercise? No problem! Learn how to get started on the road to a happier and healthier you.";
    var p6 = "Bodyweight and light equipment training - perfect for busy moms & dads, 60 hour a week-ers, and anyone looking to get into regular exercise on your terms.";
    return(
      <div>
        <section id="home">
          <div id="headingBg" className="col-xs-12">
            <h1>PosiFitness</h1>
            <h2>A Positive Approach to Personal&nbsp;Training</h2>
          </div>
          <div className="col-xs-12 intro-home" >
            <p>{p1}</p>
            <p>{p2}</p>  
          </div>
        </section>
      
        <CtaButton />
      </div>
    )
  }
});

module.exports = {
  Home: Home
};