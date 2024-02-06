import React, { useEffect } from "react";
import "./home.css";
import TableContainer from "../../oraganism/tableContainer/TableContainer";
import { connect } from "react-redux";
import { fetchTasksRequest } from "../../redux/actionCreators";
import ReactLoading from "react-loading";
import { getLoading, getTasks } from "../../redux/selectors";

const Home = ({ tasks, loading, fetchTasks }) => {
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <div className="header">
        <h1>Tasks</h1>
        <p>
          Delight your customers with rewards based on their progress, and
          achievements
        </p>
      </div>
      {loading ? (
        <ReactLoading
          data-testid="loader"
          className="loader"
          type={"spinningBubbles"}
          color={"#89db8f"}
        />
      ) : (
        <TableContainer tasks={tasks} />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: getTasks(state),
    loading: getLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: () => dispatch(fetchTasksRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
