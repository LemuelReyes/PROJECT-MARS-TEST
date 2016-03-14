// 'use strict';

var React= require('react');

var Timer = require('./countdownclock.jsx');

var QuestionScreen = React.createClass ({

render: function(){
   return (
     <div className="wrapper">

      <div className="clock-button">
        <Timer/>
      </div>

    </div> //ends wrapper div
  )
}

});

module.exports= QuestionScreen;
