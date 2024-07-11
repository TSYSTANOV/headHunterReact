import { useEffect } from "react";
import { withApi } from "../../hoc-helpers/withApi";
import { useSortAndFilter } from "../../hooks/useSortAndFilter";
import { ResultItem } from "./ResultItem";
import { useQueryParams } from "../../context/SearchParamsApp";

function ListOfResults({ data }) {
  const { params, setSearchLength } = useQueryParams();
  const modifiedData = useSortAndFilter(data);
  useEffect(() => {
    if (params.searchValue) {
      setSearchLength(modifiedData.length);
    }
  }, [params.searchValue]);

  return (
    <div className="wrapper__result result">
      <ul className="result__list">
        {modifiedData.length === 0 && <h2>No results for you filters</h2>}
        {modifiedData.map((item) => {
          return <ResultItem {...item} key={item.id} />;
        })}
      </ul>
    </div>
  );
}
export default withApi(ListOfResults);
