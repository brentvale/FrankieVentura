var React = require('react');

var Services = React.createClass({
  

  
  
  render: function(){
    return(
      <div className="col-xs-12">
        <h3>PosiFitness offers the following services:</h3>

        <h4>Icon 1: Personal Training</h4>
        <ul>
          <li>Individualized exercise programs</li>
          <li>Fitness where you want it (home, office, park)</li>
          <li>Simple pay as you go or monthly membership available</li>
        </ul>
  
  
        <h4>Icon 2: Corporate Wellness</h4>
        <ul>
          <li>Fitness delivered directly to your employees</li>
          <li>Availability morning, noon, and evening</li>
          <li>Company retreat? Team-build with fun exercises and games or relaxing yoga</li>
        </ul>
  
        <h4>Icon 3: Families</h4>
        <ul>
          <li>Customized routines for families to perform together</li>
          <li>Strengthen muscles and relationships</li>
          <li>With as little as 20 minutes per day you can improve the overall health of the entire family</li>
        </ul>
  
        <h4>Icon 4:  Small Group Training</h4>
        <ul>
          <li>Have a group of 2 or more? No problem!</li>
          <li>Workout buddies keep you accountable and engaged</li>
          <li>Discounts on personal training for referrals</li>
        </ul>
      </div>
    )
  }
});

module.exports = {
  Services: Services
};