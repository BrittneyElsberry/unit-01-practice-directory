const initialState = {
    // categoryId: 0,
    // deptId: 0,
    // userId: 0,
    // feedback: '',
    // date: 0

    feedback: [],
    

}

const POST_FEEDBACK = "POST_FEEDBACK"

export const postFB = (fb)=>{
    console.log(fb)
    return{
        type: POST_FEEDBACK,
        payload: fb
    }
}



export default function fbReducer(state=initialState, action){
switch(action.type){
    case POST_FEEDBACK:
        return {...initialState, ...action.payload}

default: return state

}

}