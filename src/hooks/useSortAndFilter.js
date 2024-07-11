import { useQueryParams } from "../context/SearchParamsApp";
import { dateCalculate } from "../utils/dateCalculate";

export const useSortAndFilter = (dataArray) => {
  const { params } = useQueryParams();
  const filteredData = dataArray.filter((item) => {
    const salaryCheck = params.salary
      ? item.minCompensation >= params.salary
      : true;
    const experienceCheck = params.experience
      ? item.experience === params.experience
      : true;
    const employmentCheck = params.employment
      ? params.employment.split(",").some((typeOfEmployment) => {
          return item.employment.includes(typeOfEmployment);
        })
      : true;
    const dateCheck = params.periodValue
      ? dateCalculate(item.date, params.periodValue)
      : true;
    const searchCheck = params.searchValue
      ? item.title
          .toLowerCase()
          .includes(params.searchValue.toLowerCase().trim())
      : true;
    return (
      salaryCheck &&
      experienceCheck &&
      employmentCheck &&
      dateCheck &&
      searchCheck
    );
  });
  const sortedData = params.orderValue
    ? [...filteredData].sort((a, b) => {
        switch (params.orderValue) {
          case "date":
            return new Date(a.date) > new Date(b.date) ? -1 : 1;
          case "up":
            return a.minCompensation > b.minCompensation ? -1 : 1;
          case "down":
            return a.minCompensation > b.minCompensation ? 1 : -1;
        }
      })
    : filteredData;
  return sortedData;
};
