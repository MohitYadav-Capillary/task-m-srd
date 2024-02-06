import { call, put, takeEvery } from "redux-saga/effects";

import { FETCH_TASKS_REQUEST } from "../constants";
import { fetchTasksFailure, fetchTasksSuccess } from "../actionCreators";

import { getTasksApi } from "../api";

export function* fetchTasks() {
  try {
    const tasks = yield call(getTasksApi, "http://localhost:3500");
    yield put(fetchTasksSuccess(tasks));
  } catch (error) {
    yield put(fetchTasksFailure(error));
  }
}

function* watchFetchTasks() {
  yield takeEvery(FETCH_TASKS_REQUEST, fetchTasks);
}

export default watchFetchTasks;
