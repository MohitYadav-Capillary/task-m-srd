import { call, put, takeLatest } from "redux-saga/effects";

import { DELETE_TASK_REQUEST } from "../constants";
import { deleteTaskFailure, deleteTaskSuccess } from "../actionCreators";
import { deleteTaskApi } from "../api";

export function* deleteTask(id) {
  try {
    const response = yield call(
      deleteTaskApi,
      `http://localhost:3500/tasks/${id}`
    );

    yield put(deleteTaskSuccess(String(response)));
  } catch (error) {
    yield put(deleteTaskFailure(error));
  }
}

function* watchDeleteTask() {
  yield takeLatest(DELETE_TASK_REQUEST, (action) => deleteTask(action.payload));
}

export default watchDeleteTask;
