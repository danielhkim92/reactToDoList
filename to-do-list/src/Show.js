import React, { Component } from 'react';


class Show extends Component {

  deleteItem = (e) => {
    console.log(e.currentTarget.value)
    this.props.remove(e.currentTarget.value)
  }




	render() {

		const listItems = this.props.list.map((item, i)=>{
			return <div key={i}>
			<li> {item}</li>
			<button onClick={this.deleteItem}>Finish Task</button>
			</div>
		})

		return (
			<div>
				<h2>To Do List</h2>
				<ul>
					{listItems}
				</ul>
			</div>
		)
	}
}

export default Show;