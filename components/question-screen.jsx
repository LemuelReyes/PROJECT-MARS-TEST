// 'use strict';

var React= require('react');
var ReactDOM = require('react-dom');

var Question = React.createClass ({

render: function(){
   return (
    <div>Hello</div>
  )
}

});

ReactDOM.render(<Question/>, document.querySelector('#react-mount'));

module.exports= Question;
