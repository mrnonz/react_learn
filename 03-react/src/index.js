import React from 'react'
import ReactDOM from 'react-dom'

const Title = () => (
  <h1>Hello, React</h1>
)

const App = () => (
  <div>
    <h2>App</h2>
    <Title />
  </div>
)

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
