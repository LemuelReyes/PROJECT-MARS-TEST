// 'use strict';

var React= require('react');
var ReactDOM = require('react-dom');

var NotFound = React.createClass ({

render: function(){
   return (
     <div>
       <span>404 Not Found</span>
    </div>
 );
}

});

module.exports= NotFound;
