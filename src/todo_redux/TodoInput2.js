import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {registerTodo} from "../todo/todoService";
import {clearCri} from "./todoReduxSlice";

const initState = {
    title:'',
    content:''
}

const TodoInput2 = () => {

    const dispatch = useDispatch()

    const [todo, setTodo] = useState(initState)

    const changeTodo = (e) => {

        todo[e.target.name] = e.target.value

        setTodo({...todo})
    }

    const clickRegister = () => {

        const result = registerTodo(todo)

        result.then(result => {
            dispatch(clearCri())

            setTodo({title:'', content: ''})
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

export default TodoInput2;