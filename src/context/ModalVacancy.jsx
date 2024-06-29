import { createContext, useContext, useEffect, useState } from "react";
import { getVacancy } from "../api/api";

const ModalVacancy = createContext({});

export const ModalVacancyApp = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [id, setID] = useState(null);
  const [data, setData] = useState(null);
  const close = () => {
    setOpenModal(false);
    setID(null);
    setData(null);
  };
  const open = (id) => {
    setOpenModal(true);
    setID(id);
  };
  useEffect(() => {
    if (id) {
      (async () => {
        try {
          setLoading(true);
          setError(null);
          const res = await getVacancy(id);

          setData(res);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [id]);
  return (
    <ModalVacancy.Provider value={{ openModal, open, close, data }}>
      {children}
    </ModalVacancy.Provider>
  );
};
export const useModalVacancy = () => useContext(ModalVacancy);
