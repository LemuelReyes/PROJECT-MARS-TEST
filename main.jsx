'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, Redirect} from 'react-router';
//components
import Question from './components/question-screen.jsx';
import Welcome from './components/Welcome.jsx';
import NotFound from './components/404.jsx';
//
// var React= require('react');
// var ReactDOM = require('react-dom');

var App = React.createClass ({

render: function(){
   return (
    <Router history={ browserHistory }>
        <Redirect from='/' to='/welcome' />
        <Route path ='/welcome' component={Welcome} />
        <Route path='/mars-test' component={Question} />
        <Route path='*' component={NotFound} />
    </Router>
   );
}
});

ReactDOM.render(<App/>, document.querySelector('#react-mount'));
