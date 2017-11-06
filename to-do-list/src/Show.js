import React, { Component } from 'react';


class Show extends Component {






	render() {

		const listItems = this.props.list.map((item, i)=>{
			return <div key={i}>
			<li> {item}</li>
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