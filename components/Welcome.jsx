// 'use strict';

var React= require('react');
var ReactDOM = require('react-dom');

var Welcome = React.createClass ({

render: function(){
   return (
     <div>
     <button onClick={this.takeTest}></button>
     </div>
 );
}

});

module.exports= Welcome;
