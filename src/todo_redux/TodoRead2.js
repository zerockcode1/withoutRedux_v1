import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeCri, clearCri, stateCri, stateCurrent} from "./todoReduxSlice";
import {fetchRead, modify, remove} from "../todo/todoService";


const initTodo =  {
    tno: 0,
    title: '',
    content: '',
    regDate:'',
    modDate: ''
}

const TodoRead2 = () => {

    const dispatch = useDispatch()
    //{tno:xx}
    const current = useSelector(stateCurrent)
    const cri = useSelector(stateCri)

    const [todo, setTodo] = useState(initTodo)

    useEffect(() => {

        if(current.tno === 0) { return }

        fetchRead(current.tno).then(todoObj => setTodo(todoObj))

    },[current.tno])


    const change = useCallback((e) => {
        e.preventDefault()
        e.stopPropagation()
        const target = e.target
        todo[target.name] = target.value

        setTodo({...todo})
    })


    const clickModify = () => {

        modify(todo).then(result => dispatch(changeCri({...cri})))
    }

    const clickRemove = () => {

        remove(todo.tno).then(result => {
            dispatch(clearCri())
            setTodo({...initTodo})
        })

    }

    return (
        <div>
            <h4>Todo Read 2 </h4>
            <div>
                <input type={'text'} name={'tno'} value={todo.tno === 0? '':todo.tno} onChange={change}/>
            </div>
            <div>
                <input type={'text'} name={'title'} value={todo.title}  onChange={change}/>
            </div>
            <div>
                <input type={'text'} name={'content'} value={todo.content}  onChange={change}/>
            </div>
            <div>
                <input type={'text'} name={'regDate'} value={todo.regDate}  onChange={change}/>
            </div>
            <div>
                <input type={'text'} name={'modDate'} value={todo.modDate}  onChange={change}/>
            </div>
            <div>
                <button onClick={() => clickModify() }>MODIFY</button>
                <button onClick={() => clickRemove() }>REMOVE</button>
            </div>
        </div>
    )
};

export default TodoRead2;