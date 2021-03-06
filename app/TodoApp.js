import React from "react";
import VisibleTodoList from "./VisibleTodoList";
import AddTodo from "./AddTodo";
import Footer from "./Footer";


const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>

);

export default TodoApp;
