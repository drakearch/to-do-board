import React, { Component } from 'react';

import Navigation from './Navigation';
import TodoForm from './TodoForm';
import TodoCard from './TodoCard';

class App extends Component {

    constructor() {
        super();
        this.state = {
            todos: [],
            todo: null
        }
        this.saveTodo = this.saveTodo.bind(this);
    }

    saveTodo(todo) {
        if(todo._id) {                
            fetch(`/api/todo/${todo._id}`, {
                method: 'PUT',
                body: JSON.stringify(todo),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html: 'Todo Updated!'});
                this.setState({ todo: null });
                this.fetchTodos();
            })
            .catch(err => console.error(err));
        }
        else {                
            fetch('/api/todo', {
                method: 'POST',
                body: JSON.stringify(todo),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html: 'Todo Saved!'});
                this.setState({ todo: null });
                this.fetchTodos();
            })
            .catch(err => console.error(err));
        }
    }

    componentDidMount() {
        this.fetchTodos();
    }

    fetchTodos() {
        fetch('/api/todo')
        .then(res => res.json())
        .then(data => {
            this.setState({todos: data});
            console.log(this.state.todos);
        });
    }

    editTodo(id) {
        fetch(`/api/todo/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                todo: data
            })
        });
    }
    
    deleteTodo(id) {
        if(confirm('Are you sure you want to delete it?')) {
            fetch(`/api/todo/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html: 'Todo Deleted!'});
                this.fetchTodos();
            });
        }
    }

    render() {
        return(
            <div>
                {/* Navigation */}
                <Navigation ntodos={ this.state.todos.length } />
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <TodoForm todo={ this.state.todo } onSaveTodo={ this.saveTodo } />
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
                                        this.state.todos.map(todo => {
                                            return(
                                                <TodoCard todo={ todo } key={ todo._id }/>
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