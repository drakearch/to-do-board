import React, { Component } from 'react';
import axios from 'axios';

import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import TodoCard from './components/TodoCard';
import store from './store';

class App extends Component {

    constructor() {
        super();
        this.state = {
            todos: [],
            todo: null
        }

        this.saveTodo = this.saveTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);

        store.subscribe(() => {
            this.setState({
                todos: store.getState().todos,
                todo: store.getState().todo
            })
        });

    }

    saveTodo(todo) {
        if(todo._id) {       
            axios.put(`/api/todo/${todo._id}`, todo)
            .then(res => {
                M.toast({html: 'Todo Updated!'});
                store.dispatch({
                    type: "SET_TODO",
                    todo: null
                });
                this.fetchTodos();
            })
            .catch(err => console.error(err));
        }
        else {           
            axios.post('/api/todo', todo)
            .then(res => {
                M.toast({html: 'Todo Saved!'});
                store.dispatch({
                    type: "SET_TODO",
                    todo: null
                });
                this.fetchTodos();
            })
            .catch(err => console.error(err));
        }
    }

    componentDidMount() {
        this.fetchTodos();
    }

    fetchTodos() {
        axios.get('/api/todo')
        .then(res => {
            store.dispatch({
                type: "SET_TODOS",
                todos: res.data
            })
        })
    }

    editTodo(todo) {
        store.dispatch({
            type: "SET_TODO",
            todo
        })
    }
    
    deleteTodo(id) {
        if(confirm('Are you sure you want to delete it?')) {
            axios.delete(`/api/todo/${id}`)
            .then(res => {
                M.toast({html: 'Todo Deleted!'});
                this.fetchTodos()
            })
        }
    }

    render() {
        return(
            <div>
                {/* Navigation */}
                <Navigation ntodos={ this.state.todos.length } />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6 l4">
                            <TodoForm onSaveTodo={ this.saveTodo } />
                        </div>
                        <div className="col s12 m6 l8">
                            <div className="row">
                                {
                                    this.state.todos.map(todo => {
                                        return(
                                            <TodoCard 
                                                todo={ todo } 
                                                key={ todo._id } 
                                                onEditTodo={ this.editTodo }
                                                onDeleteTodo= { this.deleteTodo } />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;