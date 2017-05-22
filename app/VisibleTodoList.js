import React from "react";
import {connect} from "react-redux";
import {toggleTodo} from "./Actions";
import TodoList from "./TodoList";


const getFilteredTodo = (todos,
                         filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
        case 'SHOW_COMPLETE':
            return todos.filter(todo => todo.completed);

    }
};

const mapStateToTodoListProps = (state) => {
    return {
        todos: getFilteredTodo(
            state.todos,
            state.visibilityFilter
        )
    };
};
const mapDispatchToTodoListProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    };
};
const VisibleTodoList = connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
)(TodoList);

export default VisibleTodoList;
