import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeCri, stateCri} from "./todoReduxSlice";

const TodoSearch2 = () => {

    const dispatch = useDispatch()

    const cri = useSelector(stateCri)

    const [stateKeyword, setStateKeyword] = useState(cri.keyword)

    const goSearch = ( ) => {
        dispatch(changeCri({...cri, page:1,  type:'t', keyword:stateKeyword} ))
    }

    const goClear = () => {

        const nextCri = {...cri, type:'', keyword:'', page: 1}

        dispatch(changeCri(nextCri ))
    }

    useEffect(() => {

        setStateKeyword(cri.keyword)

    },[cri])

    return (
        <div>
            <h3>Todo Search</h3>
            <input type={'text'} value={stateKeyword} onChange={(e) => setStateKeyword(e.target.value)} />
            <button onClick={() => goSearch()}>Search</button>
            <button onClick={() => {
                goClear()
                setStateKeyword('')

            }}>Clear</button>
        </div>
    );
};

export default TodoSearch2;