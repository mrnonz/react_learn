import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const App = ({text, name}) => (
//   <h1>{text}, {name}</h1>
// )

const App = (props) => {
  console.log(props)
  return <h1>{props.text}, {props.name}</h1>
}

export default App;
