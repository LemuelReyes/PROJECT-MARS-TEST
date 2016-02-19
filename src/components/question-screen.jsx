// 'use strict';

var React= require('react');
var ReactDOM = require('react-dom');

var Question = React.createClass ({

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

ReactDOM.render(<Question/>, document.querySelector('#react-mount'));

module.exports= Question;
