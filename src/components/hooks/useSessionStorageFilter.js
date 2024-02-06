import { useState, useEffect } from "react";

const useSessionStorageFilter = (initialValues) => {
  const loadFromSessionStorage = () => {
    const storedValues = sessionStorage.getItem("filterValues");
    return storedValues ? JSON.parse(storedValues) : initialValues;
  };

  const [filterValues, setFilterValues] = useState(loadFromSessionStorage);

  useEffect(() => {
    sessionStorage.setItem("filterValues", JSON.stringify(filterValues));
    setFilterValues(filterValues);
  }, [filterValues]);

  const resetFilters = () => {
    setFilterValues(initialValues);
  };

  return { filterValues, setFilterValues, resetFilters };
};

export default useSessionStorageFilter;
