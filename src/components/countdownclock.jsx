// 'use strict';
import {browserHistory} from 'react-router';

var React= require('react');

var Timer = React.createClass ({

// timer starts at 60
  getInitialState: function(){
          return {
           secondsElapsed: 60
         }
  },

// thhis function takes the state of secondsElapsed and reduced 1 second
  tick: function() {
      this.setState({ secondsElapsed: this.state.secondsElapsed - 1 });
      if(this.state.secondsElapsed === 0){
         this.stopTimer();
       }
  },

// when the clock starts it decrements by 1000 milliseconds
  start: function() {
      this.interval = setInterval (this.tick, 1000);
  },

// when the timer is at 60, display it as 0:00
  timeDone: function() {
     if(this.state.secondsElapsed === 60) {
        return '0:00';
     } else {
        return '';
     }
  },

  timesUp: function() {
      if(this.secondsLeft === 0) {
         browserHistory.push({Rejected})
      }
   },

  componentDidMount: function() {
      setTimeout(this.start, this.props.timeout);

  },

render: function(){
   return (
       <div className={this.props.startTimer ? "timer" : "timer hidden"}>
         {this.state.secondsElapsed}
       </div>
  )
}

});

module.exports= Timer;
