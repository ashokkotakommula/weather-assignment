import { put, takeLatest, all } from 'redux-saga/effects'
import axios from 'axios'

const runOurAction = function*(city, lat, lon) {
    let remoteData;
    yield  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.payload}&units=metric&appid=3fbb2b31fd3e77c536be64abc677a4d1`).then((res) => {
        remoteData = res.data
    })
    yield put({type: "SET_DATA", payload: remoteData})
}

function* getAsyncDataWatcher() {
    yield takeLatest("GET_ASYNC_DATA", runOurAction)
}

export default function* rootSaga() {
    yield all([getAsyncDataWatcher()])
} 