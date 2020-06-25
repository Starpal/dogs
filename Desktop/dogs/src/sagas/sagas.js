import { takeLatest, call, put, all } from "redux-saga/effects";
import * as actions from "../actions/actions";
import * as api from "../fetchAPI/API";
import { API_DATA_REQUEST, API_DATA_FAILED } from "../constants/constants";

export function* watcherSaga() {
  yield takeLatest(API_DATA_REQUEST, workerSaga);
}

function* workerSaga() {
  try {
    const responseFromApi = yield call(api.getAllBreeds);

    const dogs = Object.keys(responseFromApi.message);
    const promises = dogs.map((dog) => {
      return { [dog]: api.getBreedImages(dog) };
    });

    const dogsWithURL = yield all(dogs.map((dog) => call(fetchDogImgURL, dog)));
   

    yield put(actions.apiCallSuccess(dogsWithURL));
  } catch (error) {
    yield put(actions.apiCallFailed(error));
  }
}

function* fetchDogImgURL(dog) {
  const dogWithURL = yield call(api.getBreedImages, dog);
  return { [dog]: dogWithURL.message.length };
}
