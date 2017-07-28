import React from 'react'

class NewItem extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <button>Add</button>
      </div>
    )
  }
}

const TodoItem = ({ text }) => (
  <li>{text}</li>
)

const TodoList = ({ items }) => (
  <ul>
    {items.map((item, i) => <TodoItem key={i} text={item} />)}
  </ul>
)

class App extends React.Component {

  state = {
    items: [
      "Clean room",
      "Wash dishes",
      "Eat burger",
      "Drink!"
    ]
  }

  addItem = (item) => {
    let newState = this.state.items
    newState.push(item)

    this.setState({
      items: newState
    })
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <NewItem addItem={this.addItem}/>
        <TodoList items={this.state.items}/>
      </div>
    )
  }
}

export default App
