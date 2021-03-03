import axios from 'axios'

const initialState = {
   
    feedback: [],
    

}

const POST_FEEDBACK = "POST_FEEDBACK"
const UPDATE_FEEDBACK = "UPDATE_FEEDBACK"
const DELETE_FEEDBACK = "DELETE_FEEDBACK"


export const postFB = ()=>{
    let data = axios.get('/myfeedback/home')
    .then(res => res.data)
 
    return{
        type: POST_FEEDBACK,
        payload: data
    }
    
}


export const updateFB = ()=> {

    let data = axios.put(`/myfeedback/`)

    return {
        type: UPDATE_FEEDBACK,
        payload: data
    }

}

export const deleteFB = ()=> {
    let data = axios.delete(`/myfeedback/`)
    return {
        type: DELETE_FEEDBACK,
        payload: data
    }

}





export default function fbReducer(state=initialState, action){


    switch(action.type){
    case POST_FEEDBACK + '_FULFILLED':
        console.log(action)
        return {...state, feedback: action.payload}

     case  UPDATE_FEEDBACK + '_FULFILLED':
         console.log(action)
         return{...state, feedback: action.payload}  

     case  DELETE_FEEDBACK + '_FULFILLED':
         console.log(action)
         return{...state, feedback: action.payload}  

      

default: return state

}
}
 