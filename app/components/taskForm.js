import React, { Component } from 'react';

class TaskForm extends Component {
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
        if(this.props.task !== null) {
            if(this.props.task !== prevProps.task) {
                this.setState({
                    _id: this.props.task._id,
                    title: this.props.task.title,
                    description: this.props.task.description,
                    responsible: this.props.task.responsible,
                    priority: this.props.task.priority
                });
            }
        }
        else {
            if(this.props.task !== prevProps.task) {
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
        console.log(this.state)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSaveTask(this.state);
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
                                    placeholder="Task description"
                                    className="materialize-textarea"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn light-blue darken-4">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TaskForm;