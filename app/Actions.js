import React from "react";


let nextTodoId = 0;

export const addTodo = (name) => {
    return {
        type: 'ADD_TODO',
        name,
        id: nextTodoId++
    };
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};