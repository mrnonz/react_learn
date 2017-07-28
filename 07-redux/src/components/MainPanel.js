import React from 'react'

class MainPanel extends React.Component {

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

export default MainPanel
