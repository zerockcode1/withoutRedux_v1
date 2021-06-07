import React from 'react';

import {useDispatch} from "react-redux";
import {movePage} from "./todoReduxSlice";

const PageList3 = ({pageList, start, end, page, prev, next}) => {

    const dispatch = useDispatch()
    const clickMovePage = (num) => {
        dispatch(movePage({page: num}))
    }

    return (
        <div>
            {prev? <button onClick={() => clickMovePage(start-1)}>PREV</button>:<></> }
            {pageList?.map(p => <button key={p} onClick={() => clickMovePage(p)}>{p}</button>)}
            {next? <button onClick={() => clickMovePage(end + 1)}>NEXT</button>:<></> }
        </div>
    );
};

export default PageList3;