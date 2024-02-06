import { createSelector } from "reselect";

const getTasks = (state) => state.get("tasks");
const getLoading = (state) => state.get("loading");

const getTasksByFilters = createSelector(
  getTasks,
  (_, filters) => filters,
  (tasks, filters) => {
    const { status, priority, associated } = filters;

    const tasksFiltered = tasks.filter((task) => {
      if (status !== "Status" && task.status !== status) return false;
      if (priority !== "Priority" && task.priority !== priority) return false;
      if (associated !== "Associated" && task.associated !== associated)
        return false;
      return true;
    });
    return tasksFiltered;
  }
);

export { getTasks, getLoading, getTasksByFilters };
