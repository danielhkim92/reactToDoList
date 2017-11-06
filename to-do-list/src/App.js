import React, { Component } from 'react';
import Show from './Show.js';


class App extends Component {
    constructor(props){
      super(props)

        this.state = {
          list: ['Laundry' ,'Dishes', 'Cleaning', 'Pooping']
    }
  }

  render() {
    return (
        <div>
          <h1>ToDo List</h1>
          <Show list={this.state.list}/>
          <h1>Add ToDo List</h1>
          <label>Add Item</label>
          <input type="text" placeholder={this.state.inputValue}  onKeyPress={this.handleInput}/>

        </div>
    );
  }
}

export default App;
