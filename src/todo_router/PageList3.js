import React from 'react';
import {useHistory} from "react-router-dom";

const PageList3 = ({pageList, start, end, page, prev, next, cri}) => {


    let history = useHistory()


    const clickMovePage = (num) => {

        history.push("/list?" + new URLSearchParams({...cri, page:num}))

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