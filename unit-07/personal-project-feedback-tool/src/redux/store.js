import {createStore, combineReducers} from 'redux'
import authReducer from './authReducer'
import fbReducer from './fbReducer'

const rootReducer = combineReducers({
    authReducer,
    fbReducer
})


export default createStore(rootReducer, {authReducer, fbReducer})

