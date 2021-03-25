import { authReducer, customAsyncData, customAsyncDataTwo } from './allReducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    authReducer, customAsyncData, customAsyncDataTwo
})

export default rootReducer