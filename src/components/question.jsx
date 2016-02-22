// 'use strict';

var React= require('react');
var ReactDOM = require('react-dom');

var Questions = React.createClass ({

render: function(){
   return (


     <div className="question-container">
       <span>Could you live the rest of your life without your family and friends?</span>
       <form className="flex-form">
         <input type="text" value="" placeholder="" />
         <button type="submit" className="submit-button">Submit Answer</button>
       </form>
     </div>


     <div className="question-container">
       <span>  If x = combustible alignments funneled through the module-x generator, how much
         would the gravitational propellation consume fuel?
       </span>
       <form className="flex-form">
         <input type="text" value="" placeholder="" />
         <button type="submit" className="submit-button">Submit Answer</button>
       </form>
     </div>

     <div className="question-container">
       <span>Could you put the mission before your shipmates?
       </span>
       <form className="flex-form">
         <input type="text" value="" placeholder="" />
         <button type="submit" className="submit-button">Submit Answer</button>
       </form>
     </div>

 );
}

});

module.exports= Questions;
