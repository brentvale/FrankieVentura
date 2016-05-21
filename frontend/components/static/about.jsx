var React = require('react');

var About = React.createClass({
  render: function(){
    var paragraphs = ["PosiFitness is born from the notion that fitness is so much more than six-packs and big biceps. Fitness is a lifestyle that stems from living positively, striving to improve, and feeling your best so you can be the best person for the people you love.",
"What makes PosiFitness different from traditional personal training programs? It’s a combination of the individually customized workout routines, personalization of frequency and duration of those routines, and the emphasis on lifelong change, instead of quick fixes. Our mantra is “fitness for health, happiness, and performance.”",
"PosiFitness founder, Francesco “Frankie” Ventura is an ACE Certified personal trainer. His passions surround his family, sports, and teamwork. Frankie continues his active lifestyle today by playing recreational soccer and ice hockey. ",
"But about ten years ago, this was not so - Frankie had the cholesterol levels of a 40 year old man and had only just become an adult. This was his call to action and flung him down a path to a better, healthier life. He started eating right and exercising regularly. He lost 30 lbs and earned a spot on his college soccer team. This was the seed that would eventually become PosiFitness.",
"Tired of the attention that the fitness industry places on getting “the look,” Frankie created PosiFitness with hopes to change how society views health and foster the idea that fitness is a lifelong goal meant to be measured by success in the form a happier, healthier self. ",
"Getting started is an email or phone call away.",
"Get in touch"]
  
    return(
      <div className="col-xs-12">
      {
        paragraphs.map(function(para, idx){
        return <p key={idx}>{para}</p>
        })
      }
      </div>
    )
  }
});

module.exports = {
  About: About
};