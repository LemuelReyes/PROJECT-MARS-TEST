// 'use strict';

var React= require('react');
var ReactDOM = require('react-dom');

// QUESTIONS
var questionsList = [{
  'question': 'Could you live the rest of your life without your family and friends?',
  'answer': 'yes'
},
{'question':'If the quantum generator pulsates at 350 rpm and the heat expulsion dissipates at 20 cubic meters per second, how much would the spaceship consume fuel?',
  'answer':'alot'
},
{'question': 'Are you mentally, physically, and emotionally fit as disclosed in your record files?',
 'answer': 'yes'
}
];


var Questions = React.createClass ({

// current question is the first item in the questionsList array
getInitialState: function() {
  return {
    currentQuestion:0
  };
},

// when a user clicks, it will change the initial state and add 1, thus rendering the next list in the array
_handleClick: function() {
  this.setState({currentQuestion:this.state.currentQuestion+1});
},

// render the new state as per user's interaction
render: function(){
   return (

       <div className="question-container">
         <span>{questionsList[this.state.currentQuestion].question}</span>
         <form className="flex-form">
           <input type="text" value="" placeholder="" />
           <button type="submit" className="submit-button" onClick={this._handleClick}>Submit Answer</button>
         </form>
       </div>
 );
}

});

module.exports= Questions;
