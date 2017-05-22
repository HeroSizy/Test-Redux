import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./Reducers";
import TodoApp from "./TodoApp";


const rootEL = document.getElementById('root');

ReactDOM.render(
    <Provider store={createStore(
        reducer,
        {},
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <TodoApp />
    </Provider>,
    rootEL
);


console.log('All good!');
