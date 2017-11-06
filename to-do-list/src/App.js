import React, { Component } from 'react';
import Show from './Show.js';


class App extends Component {
    constructor(props){
      super(props)

        this.state = {
          list: ['Laundry' ,'Dishes', 'Cleaning', 'Pooping'],
          inputValue: '',
    }
  }

  handleInput = (e) => {
    if(e.key === 'Enter'){
      this.state.list.push(this.state.inputValue)
    }

    const state = this.state;
    state.inputValue = e.target.value;
    this.setState(state)
  }

  deleteItem = (item) => {
    const state = this.state;
    const index = state.list.indexOf(item);
    state.list.splice(index, 1); 
    this.setState(state);

  }


  render() {
    return (
        <div>
          <h1>ToDo List</h1>
          <Show remove={this.deleteItem} list={this.state.list}/>
          <h1>Add ToDo List</h1>
          <label>Add Item</label>
          <input type="text"  onKeyPress={this.handleInput}/>

        </div>
    );
  }
}

export default App;
