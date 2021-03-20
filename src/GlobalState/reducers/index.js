import { authReducer, customAsyncData } from './allReducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    authReducer, customAsyncData
})

export default rootReducer