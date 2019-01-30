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
		
		let priority;
		if(this.props.todo.priority === 'high') {
			priority = <div className="chip red white-text">{ this.props.todo.priority }</div>
		}
		else {
			if( this.props.todo.priority === 'medium') {
				priority = <div className="chip green white-text">{ this.props.todo.priority }</div>
			}
			else {
				priority = <div className="chip yellow darken-3 white-text">{ this.props.todo.priority }</div>
			}
		}

    return (
      <div className="col s12 m12 l6">
        <div className="card">
					<div className="card-content indigo darken-4 white-text center-align">
						<span className="card-title">{ this.props.todo.title }</span>
						{ priority }
					</div>
					<div className="card-content black-text left-align">
						<p>{ this.props.todo.description }</p>
					</div>
					<div className="card-action right-align">
						<button onClick={ this.handleEdit } className="btn-floating indigo" style={{margin: '0 5px'}}>
							<i className="material-icons">edit</i>
						</button>
						<button onClick={ this.handleDelete } className="btn-floating red" style={{margin: '0 5px'}}>
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
