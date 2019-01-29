import React, { Component } from 'react'

class TodoCard extends Component {
  render() {
    return (
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
					<div className="card-content white-text">
						<span className="card-title">{ this.props.todo.title }</span>
						<p>{ this.props.todo.description }</p>
					</div>
					<div className="card-action">
						<a href="#">Action 1</a>
						<a href="#">Action 1</a>
					</div>
				</div>
      </div>
    )
  }
}

export default TodoCard
