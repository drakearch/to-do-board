import { createStore } from 'redux'

const reducer = (state, action) => {

    if(action.type === "SET_TODOS") {
        return {
            ...state,
            todos: action.todos
        }
    }

    if(action.type === "SET_TODO") {
        return {
            ...state,
            todo: action.todo
        }
    }

    return state;
}

export default createStore(reducer, {
    todos: [],
    todo: null
});