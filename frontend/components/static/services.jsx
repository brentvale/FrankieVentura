var React = require('react');
var CtaButton = require('./cta_button.jsx').CtaButton;

var Services = React.createClass({
  render: function(){
    return(
      <div>
        <section id="services">
          <div>
            <h2>PosiFitness offers the following services:</h2>

            <div className="services-container">
              <h3>Personal Training</h3>
              <ul>
                <li>Individualized exercise programs</li>
                <li>Fitness where you want it (home, office, park)</li>
                <li>Simple pay as you go or monthly membership available</li>
              </ul>
  
  
              <h3>Corporate Wellness</h3>
              <ul>
                <li>Fitness delivered directly to your employees</li>
                <li>Availability morning, noon, and evening</li>
                <li>Company retreat? Team-build with fun exercises and games or relaxing yoga</li>
              </ul>
  
              <h3>Families</h3>
              <ul>
                <li>Customized routines for families to perform together</li>
                <li>Strengthen muscles and relationships</li>
                <li>With as little as 20 minutes per day you can improve the overall health of the entire family</li>
              </ul>
  
              <h3>Small Group Training</h3>
              <ul>
                <li>Have a group of 2 or more? No problem!</li>
                <li>Workout buddies keep you accountable and engaged</li>
                <li>Discounts on personal training for referrals</li>
              </ul>
            </div>
          
          </div>
      
          <CtaButton />
      
        </section>
      
      </div>
    )
  }
});

module.exports = {
  Services: Services
};