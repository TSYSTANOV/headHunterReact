import { useEffect } from "react";
import { useQueryParams } from "../context/SearchParamsApp";

export const useSearchParams = () => {
  const { params } = useQueryParams();

  return params.searchValue ? params.searchValue : "";
};
