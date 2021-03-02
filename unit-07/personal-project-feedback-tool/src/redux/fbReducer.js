import axios from 'axios'

const initialState = {
    // categoryId: 0,
    // deptId: 0,
    // userId: 0,
    // feedback: '',
    // date: 0

    feedback: [],
    

}

const POST_FEEDBACK = "POST_FEEDBACK"

export const postFB = ()=>{
    let data = axios.get('/myfeedback/home').then(res => res.data)
   
    return{
        type: POST_FEEDBACK,
        payload: data
    }
}



export default function fbReducer(state=initialState, action){
switch(action.type){
    case POST_FEEDBACK + '_FULFILLED':
        return {...initialState, ...action.payload}

default: return state

}

}