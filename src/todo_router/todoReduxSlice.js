import {createSlice} from "@reduxjs/toolkit";

const initState = {
    cri: {
        page:1,
        size:10,
        type:'',
        keyword:''
    },
    current: {tno: 0}
}

export const todoSlice = createSlice({
    name:"todoRedux",
    initialState: {...initState},
    reducers: {
        movePage: (state, {payload}) => {
            console.log("movePage", payload)
            state.cri.page = payload.page
        },
        changeCri: (state, {payload}) => {
            state.cri = payload
        },
        clearCri: (state) => {
            state.cri = {...initState.cri}
        },
        changeCurrent: (state, {payload}) => {

            state.current = payload

        }

    },
    extraReducers: {
    }

})


export const stateCri = (state => state.todoRedux.cri)
export const stateCurrent = (state => state.todoRedux.current)

export const {movePage, changeCri, clearCri, changeCurrent} = todoSlice.actions

export default todoSlice.reducer