// 'use strict';

var React= require('react');
var ReactDOM = require('react-dom');

var Question = React.createClass ({

render: function(){
   return (
     //this sets the color background
     <div className="wrapper">

      <div className="clock-button">50</div>

      <div className="button-flex">
        <button>Begin Evaluation</button>
      </div>
    </div> //ends wrapper div

  );
}

});

ReactDOM.render(<Question/>, document.querySelector('#react-mount'));

module.exports= Question;
