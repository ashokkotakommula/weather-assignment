const authReducer = (state = false, action) => {
    switch(action.type) {
        case "LOG_IN": 
            localStorage.setItem('isLogIn', !state)
            return !state
        case "LOG_OUT": 
            localStorage.setItem('isLogIn', state)
            return state
        default:
            return state
    }
}

const customAsyncData = (state={}, action) => {
    switch(action.type) {
        case "SET_DATA": 
            return [action.payload]
            
        default:
            return state
    }
}

const customAsyncDataTwo = (state={}, action) => {
    switch(action.type) {
        case "SET_FIVEDAY":
            return [action.payload]
        default: 
            return state
    }
}

export {authReducer, customAsyncData, customAsyncDataTwo}