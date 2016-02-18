var React= require('react');
var ReactDOM = require('react-dom');

var MARS = React.createClass ({

render: function(){
   return (
     //this sets the color background
     <body>
       <header>
         <h1>mars</h1>

         <div className="rocket-container">
           <i className="fa fa-space-shuttle"></i>
         </div>

       </header>

     </body>

   )
}

});

ReactDOM.render(<MARS/>, document.querySelector('#react-mount'));
