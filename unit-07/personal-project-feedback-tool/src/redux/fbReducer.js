import axios from 'axios'

const initialState = {
   
    feedback: [],
    

}

const POST_FEEDBACK = "POST_FEEDBACK"
const UPDATE_FEEDBACK = "UPDATE_FEEDBACK"
const POST_FEEDBACK_MANAGER_VIEW = "POST_FEEDBACK_MANAGER_VIEW"



export const postFB = ()=>{
    let data = axios.get('/myfeedback/:user_id')
    .then(res => res.data)
 
    return{
        type: POST_FEEDBACK,
        payload: data
    }
    
}




export const postFBManagerView = ()=>{
    let data = axios.get('/myfeedback/:user_id')
    .then(res => res.data)
 
    return{
        type: POST_FEEDBACK_MANAGER_VIEW,
        payload: data
    }
    
}

// export const updateFB = (id)=> {
    
//     let data = axios.put(`/myfeedback/${id}`)

//     return {
//         type: UPDATE_FEEDBACK,
//         payload: data
//     }

// }




export default function fbReducer(state=initialState, action){


    switch(action.type){
    case POST_FEEDBACK + '_FULFILLED':
        console.log(action)
        return {...state, feedback: action.payload}


    case POST_FEEDBACK_MANAGER_VIEW + '_FULFILLED':
        console.log(action)
        return {...state, feedback: action.payload}

    //  case  UPDATE_FEEDBACK + '_FULFILLED':
    //      console.log(action)
    //      return{...state, feedback: action.payload}  

    //  case  DELETE_FEEDBACK + '_FULFILLED':
    //      console.log(action)
    //      return{...state, feedback: action.payload}  

      

default: return state

}
}
 