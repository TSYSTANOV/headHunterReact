import { createContext, useContext, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const SearchParams = createContext({});

export const SearchParamsApp = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsRef = useRef();
  const params = useMemo(() => {
    return Object.fromEntries(searchParams);
  }, [searchParams]);

  useEffect(() => {
    if (!params.city && !params.country && Object.keys(params).length !== 0) {
      setSearchParams((prev) => {
        return { country: "Украина", ...Object.fromEntries(prev) };
      });
    }
  }, [params]);

  const addParamsByRegion = (queryParams) => {
    const obj = Object.keys(params).reduce((acc, el) => {
      if (el !== "country" && el !== "city") {
        acc[el] = params[el];
      }
      return acc;
    }, {});
    setSearchParams(() => {
      return { ...queryParams, ...obj };
    });
  };
  const addParams = (queryParams) => {
    paramsRef.current = { ...paramsRef.current, ...queryParams };

    setSearchParams((prev) => {
      const modifyObj = { ...Object.fromEntries(prev), ...paramsRef.current };
      const arr = Object.keys(modifyObj).reduce((acc, el) => {
        if (modifyObj[el]) {
          acc[el] = modifyObj[el];
        }
        return acc;
      }, {});

      return { ...arr };
    });
  };

  return (
    <SearchParams.Provider value={{ params, addParamsByRegion, addParams }}>
      {children}
    </SearchParams.Provider>
  );
};
export const useQueryParams = () => useContext(SearchParams);
