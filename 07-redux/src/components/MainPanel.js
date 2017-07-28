import React from 'react'

class NewItem extends React.Component {
  state = {
    text: ''
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  onClick = () => {
    this.props.addItem(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange} value={this.state.text} />
        <button onClick={this.onClick}>Add</button>
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

const MainPanel = ({addItem, items}) => (
  <div>
    <h1>Todo</h1>
    <NewItem addItem={addItem}/>
    <TodoList items={items}/>
  </div>
)

export default MainPanel
