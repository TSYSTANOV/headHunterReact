import { useQueryParams } from "../../context/SearchParamsApp";

function FoundInfo() {
  const { params, searchLength } = useQueryParams();
  return (
    <>
      {params.searchValue && (
        <h1 className="found">
          {searchLength} вакансий &laquo;
          <span className="found__item">{params.searchValue}</span>
          &raquo;
        </h1>
      )}
    </>
  );
}
export { FoundInfo };
