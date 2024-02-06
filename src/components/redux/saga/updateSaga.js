import { call, put, takeEvery } from "redux-saga/effects";
import { UPDATE_TASK_REQUEST } from "../constants";
import { updateTaskSuccess, updateTaskFailure } from "../actionCreators";
import { updateTaskApi } from "../api";

function* updateTask(task) {
  try {
    const data = yield call(updateTaskApi, task);
    yield put(updateTaskSuccess(task));
  } catch (error) {
    yield put(updateTaskFailure(error));
  }
}

function* watchUpdateSaga() {
  yield takeEvery(UPDATE_TASK_REQUEST, (action) => updateTask(action.payload));
}

export default watchUpdateSaga;
