var React= require('react');
var ReactDOM = require('react-dom');

var MARS = React.createClass ({

render: function(){
   return (
     //this sets the color background
     <div className="wrapper">
       <header>
         <h1>mars</h1>

         <div className="rocket-container">
              <i className="fa fa-space-shuttle"></i>
         </div>
       </header>

      <div className="clock-button">50</div>

      <div className="button-flex">
        <button>Begin Evaluation</button>
      </div>
    </div> //ends wrapper div

   )
}

});

ReactDOM.render(<MARS/>, document.querySelector('#react-mount'));
