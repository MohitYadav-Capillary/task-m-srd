import { put, call, takeEvery } from "redux-saga/effects";

import { ADD_TASK_REQUEST } from "../constants";

import { addTaskSuccess, addTaskFailure } from "../actionCreators";

import { addTaskApi } from "../api";

export function* addTask(task) {
  try {
    const response = yield call(addTaskApi, task);
    yield put(addTaskSuccess(response));
  } catch (error) {
    yield put(addTaskFailure(error));
  }
}

function* watchAddTask() {
  yield takeEvery(ADD_TASK_REQUEST, (action) => addTask(action.payload));
}

export default watchAddTask;
