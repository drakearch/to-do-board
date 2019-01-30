import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();

        this.state = {
            _id: '',
            title: '',
            description: '',
            responsible: '',
            priority: 'medium'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        M.AutoInit();
    }

    componentDidUpdate(prevProps) {
        if(this.props.todo !== null) {
            if(this.props.todo !== prevProps.todo) {
                this.setState({
                    _id: this.props.todo._id,
                    title: this.props.todo.title,
                    description: this.props.todo.description,
                    responsible: this.props.todo.responsible,
                    priority: this.props.todo.priority
                });
            }
        }
        else {
            if(this.props.todo !== prevProps.todo) {
                this.setState({
                    _id: '',
                    title: '',
                    description: '',
                    responsible: '',
                    priority: 'medium'
                });
            }
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSaveTodo(this.state);
        console.log(this.state);
        console.log('Sending data...');
    }

    render() {
        return(
            <div className="card">
                <div className="card-content">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input 
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    value={this.state.title}
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
                                    value={this.state.responsible}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <select
                                    name="priority"
                                    value={this.state.priority}
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
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="right-align">
                            <button className="btn-floating red" style={{margin: '0 5px'}}>
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