import React from "react";
import {combineReducers} from "redux";


const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                name: action.name,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (action.id === state.id) {
                return {
                    ...state,
                    completed: !state.completed
                };
            } else {
                return state;
            }
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(state, action)];

        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));

        default:
            return state;
    }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};


const reducer = combineReducers({
    todos,
    visibilityFilter
});

export default reducer;