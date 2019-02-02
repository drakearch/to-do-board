const setTodo = todo => {
    return {
        type: "SET_TODO",
        todo
    }
};

const setTodos = todos => {
    return {
        type: "SET_TODOS",
        todos
    }
};

export { setTodo, setTodos };