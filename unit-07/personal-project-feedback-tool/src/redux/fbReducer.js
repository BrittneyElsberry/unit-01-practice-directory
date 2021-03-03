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
    let data = axios.get('/myfeedback/home')
    .then(res => res.data)
   console.log(data, 'reducer data')
   console.log('dddddddddddd')
    return{
        type: POST_FEEDBACK,
        payload: data
    }
    
}





export default function fbReducer(state=initialState, action){


    switch(action.type){
    case POST_FEEDBACK + '_FULFILLED':
        console.log(action)
        return {...state, feedback: action.payload}

      

default: return state

}

}

//spread in state not initial state -- ^^^ 
//spreading in initial state will reset state when sending the payload back 