import React, { Component } from 'react';

import Navigation from './navigation';
import TaskForm from './taskForm';

class App extends Component {

    constructor() {
        super();
        this.state = {
            tasks: [],
            task: null
        }
        this.saveTask = this.saveTask.bind(this);
    }

    saveTask(task) {
        if(task._id) {                
            fetch(`/api/task/${task._id}`, {
                method: 'PUT',
                body: JSON.stringify(task),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html: 'Task Updated!'});
                this.setState({ task: null });
                this.fetchTasks();
            })
            .catch(err => console.error(err));
        }
        else {                
            fetch('/api/task', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html: 'Task Saved!'});
                this.setState({ task: null });
                this.fetchTasks();
            })
            .catch(err => console.error(err));
        }
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
                task: data
            })
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

    render() {
        return(
            <div>
                {/* Navigation */}
                <Navigation ntasks={ this.state.tasks.length } />
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <TaskForm task={ this.state.task } onSaveTask={ this.saveTask } />
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Responsible</th>
                                        <th>Priority</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map(task => {
                                            return(
                                                <tr key={task._id}>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                    <td>{task.responsible}</td>
                                                    <td>{task.priority}</td>
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