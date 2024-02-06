import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
} from "./constants";

const fetchTasksRequest = () => {
  return {
    type: FETCH_TASKS_REQUEST,
  };
};

const fetchTasksSuccess = (tasks) => {
  return {
    type: FETCH_TASKS_SUCCESS,
    payload: tasks,
  };
};

const fetchTasksFailure = (error) => {
  return {
    type: FETCH_TASKS_FAILURE,
    payload: error,
  };
};

const deleteTaskRequest = (id) => {
  return {
    type: DELETE_TASK_REQUEST,
    payload: id,
  };
};

const deleteTaskSuccess = (id) => {
  return {
    type: DELETE_TASK_SUCCESS,
    payload: id,
  };
};

const deleteTaskFailure = (error) => {
  return {
    type: DELETE_TASK_FAILURE,
    payload: error,
  };
};

const addTaskRequest = (task) => {
  return {
    type: ADD_TASK_REQUEST,
    payload: task,
  };
};

const addTaskSuccess = (task) => {
  return {
    type: ADD_TASK_SUCCESS,
    payload: task,
  };
};

const addTaskFailure = (error) => {
  return {
    type: ADD_TASK_FAILURE,
    payload: error,
  };
};

const updateTaskRequest = (task) => {
  return {
    type: UPDATE_TASK_REQUEST,
    payload: task,
  };
};

const updateTaskSuccess = (task) => {
  return {
    type: UPDATE_TASK_SUCCESS,
    payload: task,
  };
};

const updateTaskFailure = (error) => {
  return {
    type: UPDATE_TASK_FAILURE,
    payload: error,
  };
};

export {
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksFailure,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskFailure,
  addTaskRequest,
  addTaskSuccess,
  addTaskFailure,
  updateTaskRequest,
  updateTaskSuccess,
  updateTaskFailure,
};
