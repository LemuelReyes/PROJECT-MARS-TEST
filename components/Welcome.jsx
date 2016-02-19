// 'use strict';

var React= require('react');
var ReactDOM = require('react-dom');

var Welcome = React.createClass ({

  render: function(){
     return (
       //this sets the color background
       <div className="wrapper">

        <div className="button-flex">
          <button>Begin Evaluation</button>
        </div>
        
      </div> //ends wrapper div

    );
  }

});

module.exports= Welcome;
