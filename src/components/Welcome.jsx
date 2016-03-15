// 'use strict';

var React= require('react');
import {browserHistory} from 'react-router';

var Welcome = React.createClass ({

// when user clicks button, this will push the next page
transitionTakeTest(){
        browserHistory.push('/mars-test');
     },

render(){
     return (
       //this sets the color background
       <div className="wrapper">

        <div className="button-flex">
          <button onClick={this.transitionTakeTest}>Take Test</button>
        </div>

      </div> //ends wrapper div

    );
  }
});

module.exports= Welcome;
