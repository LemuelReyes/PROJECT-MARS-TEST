'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, Redirect} from 'react-router';

//components
import Question from './components/question-screen.jsx';

//
// var React= require('react');
// var ReactDOM = require('react-dom');

var App = React.createClass ({

render: function(){
   return (
    <Question />
   );
}
});

ReactDOM.render(<App/>, document.querySelector('#react-mount'));
