import React, { Component } from 'react'

class TodoCard extends Component {

	constructor() {
		super();
		this.handleEdit = this.handleEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleEdit(e) {
		e.preventDefault();
		this.props.onEditTodo(this.props.todo);
	}

	handleDelete(e) {
		e.preventDefault();
		this.props.onDeleteTodo(this.props.todo._id);
	}

	render() {
			
		let priority;
		if(this.props.todo.priority === 'high') {
			priority = <div className="chip red darken-2 white-text" style={{verticalAlign:"top", lineHeight:"16px", height:"18px", padding:"0 6px"}}>{ this.props.todo.priority }</div>
		}
		else {
			if( this.props.todo.priority === 'medium') {
				priority = <div className="chip yellow darken-3 white-text" style={{verticalAlign:"top", lineHeight:"16px", height:"18px", padding:"0 6px"}}>{ this.props.todo.priority }</div>
			}
			else {
				priority = <div className="chip green darken-2 white-text" style={{verticalAlign:"top", lineHeight:"16px", height:"18px", padding:"0 6px"}}>{ this.props.todo.priority }</div>
			}
		}

		return (
			<div className="col s12 m12 l6">
				<div className="card">
					<div className="card-content grey darken-4 white-text center-align">
						<span className="card-title">{ this.props.todo.title } { priority }</span>
						<div className="chip grey darken-3 white-text">{ this.props.todo.responsible }</div>
					</div>
					<div className="card-content black-text left-align">
						<p>{ this.props.todo.description }</p>
					</div>
					<div className="card-action right-align">
						<button onClick={ this.handleEdit } className="btn-floating indigo darken-2" style={{margin: '0 5px'}}>
							<i className="material-icons">edit</i>
						</button>
						<button onClick={ this.handleDelete } className="btn-floating red darken-2" style={{margin: '0 5px'}}>
							<i className="material-icons">delete</i>
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default TodoCard
