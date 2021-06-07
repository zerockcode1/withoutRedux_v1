import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeCurrent, stateCri} from "./todoReduxSlice";
import {fetchPage} from "../todo/todoService";
import PageList3 from "./PageList3";
import TodoSearch2 from "./TodoSearch2";
import queryString from 'query-string';
import { useHistory } from "react-router-dom";

const initResult = {
    dtoList:[]
}

const TodoList3 = () => {

    let history = useHistory()

    const dispatch = useDispatch()
    const cri = useSelector(stateCri)
    const [result, setResult] = useState(initResult)

    useEffect(() => {

        const result = fetchPage(cri)

        const queryString  = new URLSearchParams(cri).toString()

        console.log("queryString", queryString)

        result.then(result => setResult(result))

        history.push("/list?" + queryString)


    },[cri])

    const clickRead = (tno) => {
        dispatch(changeCurrent({tno:tno}))
    }

    return (
        <div>
            <h3>Todo List with Router</h3>
            <TodoSearch2></TodoSearch2>
            {result?.dtoList.map(todo => <li key={todo.tno} onClick={() => clickRead(todo.tno)}>{todo.tno} --- {todo.title}</li>)}
            <PageList3 {...result}></PageList3>
        </div>
    );
};

export default TodoList3;