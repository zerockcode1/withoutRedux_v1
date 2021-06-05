import React from 'react';
import TodoList2 from "./TodoList2";
import TodoInput2 from "./TodoInput2";
import TodoRead2 from "./TodoRead2";

const TodoWrapper2 = () => {
    return (
        <div>
            <h2>Todo Wrapper 2</h2>

            <TodoInput2></TodoInput2>

            <TodoList2></TodoList2>

            <TodoRead2></TodoRead2>
        </div>
    );
};

export default TodoWrapper2;