// 'use strict';

var React= require('react');
var ReactDOM = require('react-dom');
var questionsList = [{
  'question': 'Could you live the rest of your life without your family and friends?',
  'answer': 'yes'
},
{'question':'What color is the sky?',
  'answer':'blue'
}
];
var Questions = React.createClass ({
getInitialState: function() {
  return {
    currentQuestion:0
  };
},
_handleClick: function() {
  this.setState({currentQuestion:this.state.currentQuestion+1});
},

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
