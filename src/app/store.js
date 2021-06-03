import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../todo/todoSlice";



export default configureStore({

    reducer: {
        todo: todoSlice
    }

})