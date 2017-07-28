import React from 'react'
import firebase from '../firebase'

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

const AvItem = ({ title }) => (
  <li>{title}</li>
)

class AvList extends React.Component {
  state = {
    titles: []
  }

  componentDidMount() {
    fetch('https://api.avgle.com/v1/videos/5?limit=5')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
      })
  }

  render() {
    return (
      <ul>
        {this.state.titles.map((title, i) => <AvItem key={i} title={title} />)}
      </ul>
    )
  }
}

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
    const itemsRef = firebase.database().ref('items')
    itemsRef.push({
      text: item
    })

    let newState = this.state.items
    newState.push(item)

    this.setState({
      items: newState
    })
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items')
    itemsRef.on('value', (snapshot) => {
      const items = snapshot.val()
      let newItems = []
      for (let item in items) {
        newItems.push(items[item].text)
      }
      this.setState({
        items: newItems
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <NewItem addItem={this.addItem}/>
        <TodoList items={this.state.items}/>
        <AvList />
      </div>
    )
  }
}

export default App
