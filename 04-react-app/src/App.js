import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const {text, name} = this.props
    return (
      <div>
        <h1>{text}, {name}</h1>
        <div>{this.state.count}</div>
        <button onClick={this.onClick}>Count</button>
      </div>
    )
  }
}

export default App;
