import { Link } from "react-router-dom";
import "./tableRow.css";
import { deleteTaskRequest } from "../../redux/actionCreators";
import { connect } from "react-redux";
const TableRow = ({
  taskId,
  task,
  desc,
  owner,
  lastUpdated,
  priority,
  status,
  deleteTask,
}) => {
  return (
    <tr>
      <td>
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to={`/task/${taskId}`}
        >
          {task}
        </Link>
      </td>
      <td>{desc}</td>
      <td>{owner}</td>
      <td>{lastUpdated}</td>
      <td>{priority}</td>
      <td>{status}</td>
      <td>
        <button onClick={() => deleteTask(taskId)}>Delete</button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => dispatch(deleteTaskRequest(id)),
  };
};

export default connect(null, mapDispatchToProps)(TableRow);
