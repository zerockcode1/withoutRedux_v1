import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {registerTodo} from "../todo/todoService";


import { useHistory } from "react-router-dom";
import {clearCri} from "./todoReduxSlice";


const initState = {
    title:'',
    content:''
}

const TodoInput3 = () => {

    const dispatch = useDispatch()
    let history = useHistory();

    const [todo, setTodo] = useState(initState)

    const changeTodo = (e) => {

        todo[e.target.name] = e.target.value

        setTodo({...todo})
    }

    const clickRegister = () => {

        const result = registerTodo(todo)

        result.then(result => {

            alert(result)

            dispatch(clearCri())

            history.push("/list")

        })
    }


    return (
        <div>
            <h4>Todo Input</h4>
            <div>
                <input type={'text'} name={'title'} value={todo.title} onChange={(e) => changeTodo(e)}/>
            </div>
            <div>
                <input type={'text'} name={'content'} value ={todo.content} onChange={(e) => changeTodo(e)}/>
            </div>
            <div>
                <button onClick={() => clickRegister()}> Register</button>
            </div>
        </div>
    );
};

export default TodoInput3;