import watchFetchTasks from "./fetchSaga";
import watchDeleteTask from "./deleteSaga";
import watchAddTask from "./addSaga";
import watchUpdateSaga from "./updateSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    watchFetchTasks(),
    watchDeleteTask(),
    watchAddTask(),
    watchUpdateSaga(),
  ]);
}
