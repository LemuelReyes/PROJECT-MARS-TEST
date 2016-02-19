// 'use strict';

var React= require('react');
var ReactDOM = require('react-dom');

var Timer = React.createClass ({

  getInitialState: function(){
          return {
           secondsElapsed: 60
         }
  },

  tick: function() {
      this.setState({ secondsElapsed: this.state.secondsElapsed - 1 });
  },

  start: function() {
      this.interval = setInterval (this.tick, 1000);
  },


  componentDidMount: function() {
      setTimeout(this.start, this.props.timeout);

  },

render: function(){
   return (
    <div>Hello</div>
  )
}

});

ReactDOM.render(<Timer/>, document.querySelector('#react-mount'));

module.exports= Timer;
