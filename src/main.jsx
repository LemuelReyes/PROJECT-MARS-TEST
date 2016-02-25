'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, Redirect} from 'react-router';
//components
import QuestionScreen from './components/question-screen.jsx';
import Welcome from './components/Welcome.jsx';
import NotFound from './components/404.jsx';
import Timer from './components/countdownclock.jsx';
import Question from './components/question.jsx';
import Accepted from './components/accepted.jsx';
import Rejected from './components/rejected.jsx';


//
// var React= require('react');
// var ReactDOM = require('react-dom');

var App = React.createClass ({

render: function(){
   return (
    <Router history={ browserHistory }>
        <Redirect from='/' to='/welcome' />
        <Route path ='/welcome' component={Welcome} />
        <Route path='/mars-test' component={QuestionScreen} />
        <Route path='/mars-test-forms' component={Question} />
        <Route path='/passed' component={Accepted} />
        <Route path='/rejected' component={Rejected} />
        <Route path='*' component={NotFound} />
    </Router>
   );
}
});

ReactDOM.render(<App/>, document.querySelector('#react-mount'));
