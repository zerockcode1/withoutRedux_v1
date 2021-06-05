import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeCurrent, stateCri} from "./todoReduxSlice";
import {fetchPage} from "../todo/todoService";
import PageList2 from "./PageList2";
import TodoSearch2 from "./TodoSearch2";

const initResult = {
    dtoList:[]
}

const TodoList2 = () => {

    const dispatch = useDispatch()
    const cri = useSelector(stateCri)
    const [result, setResult] = useState(initResult)

    useEffect(() => {

        const result = fetchPage(cri)
        result.then(result => setResult(result))

    },[cri])

    const clickRead = (tno) => {
        dispatch(changeCurrent({tno:tno}))
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoSearch2></TodoSearch2>
            {result?.dtoList.map(todo => <li key={todo.tno} onClick={() => clickRead(todo.tno)}>{todo.tno} --- {todo.title}</li>)}
            <PageList2 {...result}></PageList2>
        </div>
    );
};

export default TodoList2;