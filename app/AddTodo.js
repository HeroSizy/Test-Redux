import React from "react";
import {connect} from "react-redux";
import {addTodo} from "./Actions";


let AddTodo = ({dispatch}) => {
    let input;
    return (
        <form onSubmit={
            (e) => {
                e.preventDefault();
                dispatch(addTodo(input.value));
                input.value = '';
            }
        }>
            <input
                ref={
                    node => {
                        input = node
                    }
                }
            />
            <input type="submit" value="Add Todo 😀"/>
        </form>
    );
};


export default AddTodo = connect()(AddTodo);