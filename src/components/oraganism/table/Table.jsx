import React from "react";
import "./table.css";
import TableRow from "../../molecules/tableRow/tableRow";
import { getTasksByFilters } from "../../redux/selectors";
import { connect } from "react-redux";

const Table = ({ tasks, filters }) => {
  return (
    <div className="table">
      <table>
        <thead className="thead">
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Associated</th>

            <th>Last updated</th>
            <th>Priority</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <TableRow
                key={index}
                taskId={task.id}
                task={task.task}
                desc={task.desc}
                owner={task.owner}
                priority={task.priority}
                lastUpdated={task.lastUpdated}
                status={task.status}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: getTasksByFilters(state, ownProps.filters),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
