const addTaskApi = async (task) => {
  try {
    const response = await fetch("http://localhost:3500/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (response.status !== 200) {
      throw new Error("Error adding task");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const deleteTaskApi = async (url) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (response.status !== 200) {
      throw new Error("Error deleting task");
    }
    const data = await response.text();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getTasksApi = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Error fetching tasks");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateTaskApi = async (task) => {
  try {
    const response = await fetch(`http://localhost:3500/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (response.status !== 200) {
      throw new Error("Error updating task");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export { addTaskApi, deleteTaskApi, getTasksApi, updateTaskApi };
