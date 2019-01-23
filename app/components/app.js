import React, { Component } from 'react';

import Navigation from './navigation';

class App extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            description: '',
            responsible: '',
            priority: '',
            _id: '',
            tasks: []
        }
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addTask(e) {
        if(this.state._id) {                
            fetch(`/api/task/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html: 'Task Updated!'});
                this.setState({ title: '', description: '', _id: '' });
                this.fetchTasks();
            })
            .catch(err => console.error(err));
        }
        else {                
            fetch('/api/task', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html: 'Task Saved!'});
                this.setState({ title: '', description: '' });
                this.fetchTasks();
            })
            .catch(err => console.error(err));
        }

        e.preventDefault();
    }

    componentDidMount() {
        this.fetchTasks();
    }

    fetchTasks() {
        fetch('/api/task')
        .then(res => res.json())
        .then(data => {
            this.setState({tasks: data});
            console.log(this.state.tasks);
        });
    }

    editTask(id) {
        fetch(`/api/task/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                title: data.title,
                description: data.description,
                _id: data._id
            })
            //M.toast({html: 'Task Deleted!'});
            //this.fetchTasks();
        });
    }
    
    deleteTask(id) {
        if(confirm('Are you sure you want to delete it?')) {
            fetch(`/api/task/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html: 'Task Deleted!'});
                this.fetchTasks();
            });
        }
    }

    handleChange(e) {
        const { name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <div>
                {/* Navigation */}
                <Navigation ntasks={ this.state.tasks.length } />
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" name="title" onChange={this.handleChange} placeholder="Task Title" value={this.state.title} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.handleChange} placeholder="Task Description" value={this.state.description} className="materialize-textarea"></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn light-blue darken-4">
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Descripcion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map(task => {
                                            return(
                                                <tr key={task._id}>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                    <td>
                                                        <button onClick={() => this.editTask(task._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
                                                            <i className="material-icons">edit</i>
                                                        </button>
                                                        <button onClick={() => this.deleteTask(task._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
                                                            <i className="material-icons">delete</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;