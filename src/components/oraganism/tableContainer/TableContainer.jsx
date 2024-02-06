import React, { useState } from "react";
import "./tableContainer.css";
import Table from "../table/Table";
import Filter from "../../molecules/filters/Filter";
import { Link } from "react-router-dom";
import useSessionStorageFilter from "../../hooks/useSessionStorageFilter";

const TableContainer = ({ tasks }) => {
  const owners = tasks.map((task) => task.owner);

  const unique_owners = owners.filter(
    (owner, index) => owners.indexOf(owner) === index
  );
  unique_owners.unshift("Associated");

  const { filterValues, setFilterValues } = useSessionStorageFilter({
    status: "Status",
    priority: "Priority",
    associated: "Associated",
  });
  const handleChange = (e) => {
    if (e.target.name === "status") {
      setFilterValues({ ...filterValues, status: e.target.value });
    } else if (e.target.name === "priority") {
      setFilterValues({ ...filterValues, priority: e.target.value });
    } else if (e.target.name === "associated") {
      setFilterValues({ ...filterValues, associated: e.target.value });
    }
  };

  const filterFields = [
    { name: "status", options: ["Status", "Pending", "Completed"] },
    { name: "priority", options: ["Priority", "Low", "Medium", "High"] },
    { name: "associated", options: unique_owners },
  ];

  return (
    <div className="table__container">
      <div className="filters__panel">
        <div className="filters">
          {filterFields.map((filter, index) => (
            <Filter
              key={index}
              name={filter.name}
              options={filter.options}
              handleChange={handleChange}
            />
          ))}
        </div>
        <div className="button">
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
            to="/create"
          >
            Create Task
          </Link>
        </div>
      </div>
      <Table filters={filterValues} />
    </div>
  );
};

export default TableContainer;
