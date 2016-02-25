// 'use strict';

var React= require('react');
var QuestionScreen = require('./question-screen.jsx');

var Welcome = React.createClass ({

  render: function(){
     return (
       //this sets the color background
       <div className="wrapper">

        <div className="button-flex">
          <button>Begin Evaluation</button>
          <QuestionScreen />
        </div>

      </div> //ends wrapper div

    );
  }
});

module.exports= Welcome;
