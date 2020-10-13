import React from 'react'
import ReactDOM from 'react-dom'
import {add,sub,mul,div} from './Calc.jsx';

ReactDOM.render(
  <>
  <h1>This is my calculator Program</h1>
  <ul>
    <li>Sum the given element = {add(40,39)}</li>
    <li>sub the given element = {sub(40,3)}</li>
    <li>Mul the given element = {mul(40,3)}</li>
    <li>Div the given element = {div(40,3)}</li>
  </ul>


  </>,document.getElementById('root')



);
