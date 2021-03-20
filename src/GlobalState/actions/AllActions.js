const login = () => {
    return {
        type: "LOG_IN"
    }
}

const logout = () => {
    return {
        type: "LOG_OUT"
    }
}

const getAsyncData = (city, lat, lon) => {
    return {
        type: "GET_ASYNC_DATA",
        payload: city, lat, lon
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { login, logout, getAsyncData };