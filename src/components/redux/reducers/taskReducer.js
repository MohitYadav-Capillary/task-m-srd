import { fromJS } from "immutable";
import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_FAILURE,
  FETCH_TASKS_SUCCESS,
  DELETE_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
} from "../constants";

const initialState = fromJS({
  tasks: fromJS([]),
  loading: false,
  error: null,
});

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
      return fromJS(state.set("loading", true).set("error", null));
    case FETCH_TASKS_SUCCESS:
      return fromJS(state.set("tasks", action.payload).set("loading", false));
    case FETCH_TASKS_FAILURE:
      return fromJS(
        state
          .set("error", action.payload)
          .set("loading", false)
          .set("tasks", fromJS([]))
      );

    case DELETE_TASK_REQUEST:
      return fromJS(state.set("loading", true).set("error", null));

    case DELETE_TASK_SUCCESS:
      return fromJS(
        state
          .set(
            "tasks",
            state.get("tasks").filter((task) => task.id !== action.payload)
          )
          .set("loading", false)
          .set("error", null)
      );
    case DELETE_TASK_FAILURE:
      return fromJS(state.set("loading", false).set("error", action.payload));

    case ADD_TASK_REQUEST:
      return fromJS(state.set("loading", true).set("error", null));
    case ADD_TASK_SUCCESS: {
      const data = state.get("tasks");
      data.push(action.payload);

      return fromJS(
        state.set("loading", false).set("error", null).set("tasks", data)
      );
    }
    case ADD_TASK_FAILURE:
      return fromJS(state.set("loading", false).set("error", action.payload));

    case UPDATE_TASK_REQUEST:
      return fromJS(state.set("loading", true).set("error", null));

    case UPDATE_TASK_SUCCESS:
      return fromJS(
        state
          .set("loading", false)
          .set("error", null)
          .set(
            "tasks",
            state.get("tasks").set(action.payload.id, action.payload)
          )
      );

    case UPDATE_TASK_FAILURE:
      return fromJS(state.set("loading", false).set("error", action.payload));

    default:
      return fromJS(state);
  }
};

export default taskReducer;
