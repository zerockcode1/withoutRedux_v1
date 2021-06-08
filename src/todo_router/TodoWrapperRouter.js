import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import TodoInput3 from "./TodoInput3";
import TodoList3 from "./TodoList3";



const TodoWrapperRouter = () => {
    return (
        <Router>
        <div>
            <Switch>
            <Route path={"/register"} >
                <TodoInput3></TodoInput3>
            </Route>

            <Route path={"/list"} >
                <TodoList3></TodoList3>
            </Route>

            <Router path={"/read"}>

            </Router>
            </Switch>
        </div>
        </Router>
    );
};

export default TodoWrapperRouter;