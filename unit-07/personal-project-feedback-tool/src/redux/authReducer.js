

const initialState = {
    userId: 0,
    username: '',
    password: '',
    deptNumber: 0,
    isAdmin: false
}

const UPDATE_USER = "UPDATE_USER"
const LOGOUT = "LOGOUT"

export const updateUser = (user)=> {
    console.log(user)
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export const logout = ()=>{
    return {
        type: LOGOUT
    }
}

export default function authReducer(state=initialState, action){
switch(action.type){
    case UPDATE_USER:
        return {...initialState, ...action.payload}

    case LOGOUT: 
    return {...initialState}

    default: 
    return state
}

}


