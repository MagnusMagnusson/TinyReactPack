import React, { Component } from 'react';
import {hot} from 'react-hot-loader';

class ReactApp extends Component{
   render(){
      return(
         <div>
            <h1>Hello! </h1>
            <p>The TinyReact boilerplate is running correctly as far as I can tell. </p>
            <p>Happy Development!</p>
         </div>
      ); 
   }
} 

export default hot(module)(ReactApp);