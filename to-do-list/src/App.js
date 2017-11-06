import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
      this.state = {
      list: ['laundry', 'dinner', 'vacuum']
      
    }
  }
  render() {
    return (
      <div>
        <h1> New Server</h1>
        {this.state.list}

      </div>
    );
  }
}

export default App;
