import React from 'react';
import logo from './logo.svg';
import './App.css';

// const App = ({text, name}) => (
//   <h1>{text}, {name}</h1>
// )

// const App = (props) => {
//   console.log(props)
//   return <h1>{props.text}, {props.name}</h1>
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Hello from the other site. (state)'
    }
  }

  render() {
    // return (
    //   <h1>{this.props.text}, {this.props.name}</h1>
    // )
    const {text, name} = this.props
    return (
      <h1>{text}, {name} -- {this.state.text}</h1>
    )
  }
}

export default App;
