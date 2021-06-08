import React, {useState} from 'react';
import {register} from "../todo/todoService";
import { useHistory } from "react-router-dom";
import {initCri} from "./todoService";



const initState = {
    title: '',
    content: ''
}

const TodoInput3 = () => {

    const history = useHistory()

    const [todo, setTodo] = useState(initState)

    const changeTodo = (e) => {

        todo[e.target.name] = e.target.value

        setTodo({...todo})
    }

    const clickRegister = async () => {

        const result = await register(todo)

        alert(result)

        history.push("list?" +new URLSearchParams(initCri))

    }

    return (
        <div>
            <h4>Todo Input3</h4>
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