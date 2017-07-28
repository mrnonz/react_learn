import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    count: 0
  }

  onClick = () => {
    this.setState(
      preState => ({
        count: preState.count + 1
      })
    )
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
