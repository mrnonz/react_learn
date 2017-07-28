import React from 'react'

const NewItem = () => (
  <div>
    <input type="text" />
    <button>Add</button>
  </div>
)

const TodoItem = ({ text }) => (
  <li>{text}</li>
)

const TodoList = () => (
  <ul>
    <TodoItem text="Clean room"/>
    <TodoItem text="Wash dishes"/>
    <TodoItem text="Eat burger"/>
  </ul>
)

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo</h1>
        <NewItem />
        <TodoList />
      </div>
    )
  }
}

export default App
