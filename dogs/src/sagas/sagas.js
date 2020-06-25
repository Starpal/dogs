import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from '../actions/actions'
import * as api from "../fetchAPI/API";
import { API_DATA_REQUEST, API_DATA_FAILED } from '../constants/constants'


export function* watcherSaga() {
    yield takeLatest(API_DATA_REQUEST, workerSaga);
}


function* workerSaga() {
    try {
        const responseFromApi = yield call(api.getAllBreeds());
        const dog = responseFromApi.message;
        yield put(
            actions.apiCallSuccess(dog)
            ); 

    } catch (error) {
        yield put({ type: API_DATA_FAILED, error });
    }
}