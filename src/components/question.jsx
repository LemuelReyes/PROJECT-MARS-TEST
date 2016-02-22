// 'use strict';

var React= require('react');
var ReactDOM = require('react-dom');

var Questions = React.createClass ({

render: function(){
   return (


     <div className="question-container">
       <span>According to an MIT study, there is a possibility that the first crews
         traveling to Mars will suffocate in 68 days. Does that affect your desire to participate?</span>
       <form className="flex-form">
         <input type="text" value="" placeholder="" />
         <button type="submit" className="submit-button">Submit Answer</button>
       </form>
     </div>


     <div className="question-container">
       <span>  If you walked past the cockpit and noticed the controls of the spaceship left unattended,\
          in how many parsecs do you think you could make the Kessel Run?
       </span>
       <form className="flex-form">
         <input type="text" value="" placeholder="" />
         <button type="submit" className="submit-button">Submit Answer</button>
       </form>
     </div>

     <div className="question-container">
       <span>On a scale of 1 to 10 (where 1 equals “utter despair" and 10 equals “give me a volleyball, I’ll name it Wilson")
          rate your ability to handle stress in survival situations.
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
