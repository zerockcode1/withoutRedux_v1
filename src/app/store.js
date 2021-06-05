import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../todo/todoSlice";
import todoReduxSlice from "../todo_redux/todoReduxSlice";



export default configureStore({

    reducer: {
        todo: todoSlice,
        todoRedux: todoReduxSlice
    }

})