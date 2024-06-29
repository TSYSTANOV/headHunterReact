import { withApi } from "../../hoc-helpers/withApi";
import { useSortAndFilter } from "../../hooks/useSortAndFilter";
import { ResultItem } from "./ResultItem";

function ListOfResults({ data }) {
  const modifiedData = useSortAndFilter(data);
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
