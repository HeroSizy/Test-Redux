import React from "react";

const Todo = ({
                  onClick,
                  completed,
                  name,
                  id

              }) => (
    <li key={id}
        onClick={() => onClick(id)}
        style={{
            textDecoration: completed ?
                'line-through' :
                'none'
        }} children={name}/>
);

const TodoList = ({
                      todos,
                      onTodoClick
                  }) => (
    <ul>
        {todos.map(
            todo => {
                return (
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={onTodoClick}
                    />
                )
            }
        )
        }

    </ul>
);

export default TodoList;
