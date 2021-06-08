import axios from "axios";


const baseURL ="http://localhost:8080/todo"

export const initCri = {
    page:1,
    size: 10,
    type:'',
    keyword: ''
}


export const checkCri = (paramCri) => {

    for(const attr in initCri){
        if(!paramCri[attr]){
            paramCri[attr] = initCri[attr]
        }
    }
    return paramCri
}


export const registerTodo = async (todo) => {

    const response = await axios.post(baseURL, todo)

    return response.data

}


export const fetchPage = async (cri) => {

    const response = await axios.get(baseURL +"/pages?" + new URLSearchParams(cri))

    return response.data
}

export const fetchRead = async (tno) => {

    const response = await axios.get(baseURL +tno)

    return response.data
}