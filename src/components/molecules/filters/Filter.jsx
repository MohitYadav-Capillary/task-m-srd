import React from "react";
const Filter = ({ name, options, handleChange }) => {
  return (
    <div style={{ marginRight: "10px" }}>
      <select
        onChange={handleChange}
        style={{
          backgroundColor: "white",
          color: "black",
          height: "30px",
          width: "160px",
          padding: "5px",
          margin: "0px",
          fontSize: "14px",
          fontWeight: "bold",
          borderRadius: "10px",
        }}
        name={name}
        id={name}
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
