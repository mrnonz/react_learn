import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Hello from the other site. (state)'
    }
  }

  render() {
    const {text, name} = this.props
    return (
      <h1>{text}, {name} -- {this.state.text}</h1>
    )
  }
}

export default App;
