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
const init = []
const customAsyncData = (state=init, action) => {
    switch(action.type) {
        case "SET_DATA": 
            return [...init, action.payload]
            
        default:
            return state
    }
}

export {authReducer, customAsyncData}