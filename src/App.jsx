import { Provider } from "react-redux";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home/Home";
import CreateTask from "./components/pages/createTask/CreateTask";
import ViewTask from "./components/pages/viewTask/ViewTask";
import store from "./components/redux/store/store";

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/create" element={<CreateTask />} />
            <Route path="/task/:taskId" element={<ViewTask />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
};
export default App;
