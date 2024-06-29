import { useEffect, useState } from "react";
import { useQueryParams } from "../context/SearchParamsApp";

export const useFilterParams = () => {
  const { params, addParams } = useQueryParams();
  const [filterParams, setFilterParams] = useState({
    salary: params.salary || null,
    experience: params.experience || null,
    employment: params.employment?.split(",") || [],
  });

  useEffect(() => {
    const filterObj = Object.keys(filterParams).reduce((acc, el) => {
      if (Array.isArray(filterParams[el])) {
        acc[el] = filterParams[el].toString();
      } else {
        acc[el] = filterParams[el];
      }
      return acc;
    }, {});

    addParams(filterObj);
  }, [filterParams]);

  const resetFilterParams = (e) => {
    e.preventDefault();
    setFilterParams({
      salary: null,
      experience: null,
      employment: [],
    });
  };
  const handleChange = (e) => {
    setFilterParams((prev) => {
      if (e.target.name === "employment") {
        if (prev[e.target.name].includes(e.target.value)) {
          const handlerArray = prev[e.target.name].reduce((acc, el) => {
            if (el !== e.target.value) {
              acc.push(el);
            }
            return acc;
          }, []);
          return { ...prev, [e.target.name]: handlerArray };
        } else {
          return {
            ...prev,
            [e.target.name]: [...prev[e.target.name], e.target.value],
          };
        }
      }
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return { filterParams, resetFilterParams, handleChange };
};
