import { useEffect, useState } from "react";
import { getData } from "../api/api";
import { Loader } from "../components/Loader/Loader";
import { useQueryParams } from "../context/SearchParamsApp";

export const withApi = (Component) => {
  return (props) => {
    const { params } = useQueryParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
      if (params.city || params.country) {
        (async () => {
          try {
            setLoading(true);
            setError(false);
            const res = await getData(
              params.city ? "city" : "country",
              params.city || params.country
            );
            setData(res);
          } catch (err) {
            setError(err);
          } finally {
            setLoading(false);
          }
        })();
      }
    }, [params.city, params.country]);
    return (
      <>
        {error ? (
          <h2>Something going wrong... Please try again</h2>
        ) : loading ? (
          <Loader />
        ) : (
          <Component {...props} data={data} />
        )}
      </>
    );
  };
};
