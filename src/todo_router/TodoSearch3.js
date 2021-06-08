import React, {useState} from 'react';

const TodoSearch3 = ({cri}) => {

    const [stype, setStype] = useState(cri.type)
    const [skeyword, setSkeyword] = useState(cri.keyword)

    const goSearch = () => {

    }

    return (
        <div>
            <h3>Todo Search</h3>
            <input type={'text'} value={skeyword} onChange={(e) => setSkeyword(e.target.value)} />
            <button onClick={() => goSearch()}>Search</button>
            <button >Clear</button>
        </div>
    );
};

export default TodoSearch3;