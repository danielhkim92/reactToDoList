import React, { Component } from 'react';
import Show from './Show.js';

class App extends Component {
  constructor(){
    super();
      this.state = {
      list: ['laundry', 'dinner', 'vacuum'],
      inputValue: '',
      handleInput: "",

      
    }

    }
    render() {




    return (
      <div>
        <label>Add Item</label>
        <input type="text" placeholder={this.state.inputValue}  onKeyPress={this.handleInput}/>
        <Show list={this.state.list}/>
      </div>
    )
  }
}
export default App;
