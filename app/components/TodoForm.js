import React, { Component } from 'react';
import store from '../store'

class TodoForm extends Component {
    constructor() {
        super();

        this.state = {
            todo: {
                _id: '',
                title: '',
                description: '',
                responsible: '',
                priority: 'medium'
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearState = this.clearState.bind(this);

        store.subscribe(() => {
            if (store.getState().todo) {
                this.setState({
                    todo: store.getState().todo
                })
            }
            else {
                this.clearState();
            }
        });
    }

    componentDidMount() {
        M.AutoInit();
    }

    clearState() {
        this.setState({
            todo: {
                _id: '',
                title: '',
                description: '',
                responsible: '',
                priority: 'medium'
            }
        })
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            todo: {
                ...this.state.todo,
                [name]: value
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSaveTodo(this.state.todo);
    }

    render() {
        return(
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{ this.state.todo._id ? 'Edit Todo' : 'New Todo' }</span>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    value={this.state.todo.title}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    type="text"
                                    name="responsible"
                                    placeholder="Responsible"
                                    value={this.state.todo.responsible}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <select
                                    name="priority"
                                    value={this.state.todo.priority}
                                    onChange={this.handleChange}
                                >
                                    <option value="low">low</option>
                                    <option value="medium">medium</option>
                                    <option value="high">high</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea 
                                    name="description"
                                    placeholder="Todo description"
                                    className="materialize-textarea"
                                    value={this.state.todo.description}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="right-align">
                            <button onClick={this.clearState} className="btn-floating red" style={{margin: '0 5px'}}>
                                <i className="material-icons">clear</i>
                            </button>
                            <button type="submit" className="btn-floating indigo" style={{margin: '0 5px'}}>
                                <i className="material-icons">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoForm;