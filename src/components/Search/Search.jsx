import { useEffect, useState } from "react";
import { useQueryParams } from "../../context/SearchParamsApp";
import { useSearchParams } from "../../hooks/useSearchParams";

function Search() {
  const searchParamByQueryString = useSearchParams();
  const [searchValue, setSeacrhValue] = useState(searchParamByQueryString);
  const { addParams } = useQueryParams();
  const submitSearch = (e) => {
    e.preventDefault();
    addParams({ searchValue: searchValue });
  };
  useEffect(() => {
    if (!searchValue) {
      addParams({ searchValue: searchValue });
    }
  }, [searchValue]);
  return (
    <>
      <form className="bottom__search">
        <div className="bottom__search-wrapper">
          <input
            className="bottom__input"
            type="search"
            name="search"
            value={searchValue}
            onChange={(e) => {
              setSeacrhValue(e.target.value);
            }}
          />
          <button className="bottom__advanced-options" type="button"></button>
        </div>
        <button className="bottom__btn" type="submit" onClick={submitSearch}>
          Найти
        </button>
      </form>
    </>
  );
}
export { Search };
