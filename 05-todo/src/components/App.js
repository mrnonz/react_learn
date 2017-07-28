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

const TodoList = ({ items }) => (
  <ul>
    {items.map(item => <TodoItem text={item} />)}
  </ul>
)

class App extends React.Component {

  state = {
    items: [
      "Clean room",
      "Wash dishes",
      "Eat burger"
    ]
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <NewItem />
        <TodoList items={this.state.items}/>
      </div>
    )
  }
}

export default App
