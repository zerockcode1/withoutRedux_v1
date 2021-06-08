import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom'
import qs from 'query-string'
import {checkCri, initCri} from "./todoService";

import PageList3 from "./PageList3";
import {fetchPage} from "./todoService";

const initResult = {
    dtoList:[]
}

const TodoList3 = () => {

    const location = useLocation();


    const [cri, setCri] = useState(initCri)

    const [result, setResult] = useState(initResult)

    useEffect(() => {

        console.log("useEffect...")

        const paramCri = qs.parse(location.search)

        const result = fetchPage(cri)
        result.then(result => {
            setResult(result)
            setCri(paramCri)
        })

    },[location])

    return (
        <div>
            <h2>Todo List 3</h2>
            {result?.dtoList.map(todo => <li key={todo.tno} >{todo.tno} --- {todo.title}</li>)}
            <PageList3 {...result} cri ={cri}></PageList3>
        </div>
    );
};

export default TodoList3;