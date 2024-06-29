import { useEffect, useState } from "react";
import { useQueryParams } from "../context/SearchParamsApp";

export const useSortParams = () => {
  const { addParams, params } = useQueryParams();
  const [openPeriod, setOpenPeriod] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);
  const [periodData, setPeriodData] = useState({
    name: params.periodType || "За все врёмя",
    value: params.periodValue || "365",
  });
  const [orderData, setOrderData] = useState({
    name: params.orderType || "По дате",
    value: params.orderValue || "date",
  });
  const handleChangeSortParams = (type, parametr, value) => {
    switch (type) {
      case "period":
        setPeriodData((prev) => {
          return { ...prev, name: parametr, value };
        });
        break;

      case "order":
        setOrderData((prev) => {
          return { ...prev, name: parametr, value };
        });
        break;
    }
  };
  useEffect(() => {
    addParams({
      periodType: periodData.name,
      periodValue: periodData.value,
      orderType: orderData.name,
      orderValue: orderData.value,
    });
  }, [periodData, orderData]);
  const openP = () => {
    setOpenPeriod(!openPeriod);
    closeO();
  };
  const openO = () => {
    setOpenOrder(!openOrder);
    closeP();
  };
  const closeO = () => {
    setOpenOrder(false);
  };
  const closeP = () => {
    setOpenPeriod(false);
  };

  return {
    openOrder,
    openPeriod,
    openO,
    openP,
    periodData,
    orderData,
    handleChangeSortParams,
    closeO,
    closeP,
  };
};
