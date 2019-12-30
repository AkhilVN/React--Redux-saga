import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

global.baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga);
  yield takeEvery("LOADED_DATA_DETAIL", workerSagaDetail);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: "DATA_LOADED", payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}
function* workerSagaDetail(action) {
  const payload = yield call(getDataDetail, action.payload.ID);
  console.log("kesla:",payload)
  yield put({ type: "DATA_LOADED1", payload });
}

export function getData() {
  return axios
    .get(global.baseURL)
    .then(response => {
      console.log("Response data:", response.data);
      return response.data;
    })
    .catch(error => {
      console.log(
        "123-------------Network error to be solved--------------------"
      );
      return error;
    });
}
export function getDataDetail( ID) {
  return axios
    .get(global.baseURL + "/" + ID, )
    .then(response => {
      console.log("Response data detail:", response.data);
      return response.data;
    })
    .catch(error => {
      console.log(
        "123-------------Network error to be solved--------------------"
      );
      return error;
    });
}
