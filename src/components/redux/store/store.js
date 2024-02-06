import { legacy_createStore as createStore } from "redux";
import taskReducer from "../reducers/taskReducer";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(taskReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
