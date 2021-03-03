import axios from 'axios'

const initialState = {
   
    feedback: [],
    

}

const POST_FEEDBACK = "POST_FEEDBACK"


export const postFB = ()=>{
    let data = axios.get('/myfeedback/home')
    .then(res => res.data)
 
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
 