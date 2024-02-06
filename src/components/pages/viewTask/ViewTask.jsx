import React from "react";
import "./viewTask.css";
import Input from "../../molecules/input/Input";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { updateTaskRequest } from "../../redux/actionCreators";
import { getTasks } from "../../redux/selectors";

const ViewTask = ({ tasks, updateTask }) => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const submitHandler = (e) => {
    e.preventDefault();

    const updatedTask = {
      id: taskId,
      task: e.target[0].value,
      desc: e.target[1].value,
      owner: e.target[2].value,
      priority: e.target[4].value,
      status: e.target[3].value,
      lastUpdated: `${new Date().toLocaleString()}`,
    };

    updateTask(updatedTask);

    navigate(-1);
  };

  const currTask = tasks.find((task) => task.id === taskId);

  const taskFields = [
    { name: "Task", value: currTask?.task },
    { name: "Description", value: currTask?.desc },
    { name: "Owner", value: currTask?.owner },
  ];

  return (
    <>
      <div className="heading">
        <h1>Task Details</h1>
      </div>

      <form onSubmit={submitHandler} className="create">
        {taskFields.map((input, index) => (
          <Input key={index} name={input.name} value={input.value} />
        ))}

        <label htmlFor="priority">Status</label>
        <select name="status" id="status" defaultValue={currTask?.status}>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <br />
        <br />
        <label htmlFor="priority">Priority</label>
        <select name="priority" id="priority" defaultValue={currTask?.priority}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">Update Task</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: getTasks(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (updatedTask) => dispatch(updateTaskRequest(updatedTask)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewTask);
