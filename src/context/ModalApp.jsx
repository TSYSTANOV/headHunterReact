import { useContext } from "react";
import { createContext, useState } from "react";

const Modal = createContext({});

export const ModalApp = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const open = () => {
    setOpenModal(true);
  };
  const close = () => {
    setOpenModal(false);
  };
  return (
    <Modal.Provider value={{ openModal, open, close }}>
      {children}
    </Modal.Provider>
  );
};
export const useModal = () => useContext(Modal);
