import React, { Component } from 'react'

class TodoCard extends Component {

	constructor() {
		super();
		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleEdit(e) {
		e.preventDefault();
		this.props.onEditTodo(this.props.todo._id);
		console.log('Id', this.props.todo._id);
	}

	handleDelete(e) {
		e.preventDefault();
		this.props.onDeleteTodo(this.props.todo._id);
	}

  render() {
    return (
      <div className="col s12 m12 l6">
        <div className="card blue-grey darken-1">
					<div className="card-content white-text">
						<span className="card-title">{ this.props.todo.title }</span>
						<p>{ this.props.todo.description }</p>
					</div>
					<div className="card-action">
						<button onClick={ this.handleEdit } className="btn light-blue darken-4" style={{margin: '4px'}}>
							<i className="material-icons">edit</i>
						</button>
						<button onClick={ this.handleDelete } className="btn halfway-fab waves-effect waves-light red" style={{margin: '4px'}}>
							<i className="material-icons">delete</i>
						</button>
					</div>
				</div>

					{/*
					<tr key={todo._id}>
							<td>{todo.title}</td>
							<td>{todo.description}</td>
							<td>{todo.responsible}</td>
							<td>{todo.priority}</td>
							<td>
									<button onClick={() => this.editTodo(todo._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
											<i className="material-icons">edit</i>
									</button>
									<button onClick={() => this.deleteTodo(todo._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
											<i className="material-icons">delete</i>
									</button>
							</td>
					</tr> */}
      </div>
    )
  }
}

export default TodoCard
