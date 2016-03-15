// 'use strict';

var React= require('react');
import {browserHistory} from 'react-router';

var Timer = require('./countdownclock.jsx');
var Questions = require('./question.jsx');

var QuestionScreen = React.createClass ({

// intiial state, the timer has not started yet
getInitialState(){
  return {startTimer: false};
},

//when the user clicks button, it will start the timer
startTest: function(){
  this.setState({startTimer: true});
},

// push to passed page if test subject gives correct answers
pushPassed: function() {
  browserHistory.push('/passed');
},

// push to rejected page if timer runs out or too many wrong answers are given
pushFailure() {
  browserHistory.push('/rejected');
},

render: function(){
   return (
     <div className="wrapper">

        <div className="clock-button">

{/* Clock starts at 60, if the timer runs out push rejected page*/}

        <Timer
              initialStartTime={60}
              onTimerFinished={this.pushFailure}
              startTimer={this.state.startTimer}
         />

        </div>

        <Questions/>

{/*start the test when the user clicks this button*/}

      {/*{ !this.state.startTimer ? <button className='begin-button'
                                         onClick={this.startTest}><span>BEGIN EVALUATION</span>
                                 </button>: ''}*/}

      { !this.state.startTimer ? '' : <QuestionScreen onCorrect={this._pushPassed}
                                                    onFailure={this._pushFailure}
                                                    questions={questions}/>}
     </div> //ends wrapper div
  )
}

});

module.exports= QuestionScreen;
