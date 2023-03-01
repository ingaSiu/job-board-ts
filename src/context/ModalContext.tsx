import { createContext, PropsWithChildren, useState } from 'react';
const ModalContext = createContext<{
  modalIsOpen1: boolean;
  modalIsOpen2: boolean;
  closeModal: () => void;
  closeSecondModal: () => void;
  openModal: () => void;
  openSecondModal: () => void;
}>({
  modalIsOpen1: false,
  modalIsOpen2: false,
  closeModal: () => {},
  closeSecondModal: () => {},
  openModal: () => {},
  openSecondModal: () => {},
});
const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modalIsOpen1, setIsOpen1] = useState<boolean>(false);
  const [modalIsOpen2, setIsOpen2] = useState<boolean>(false);
  const closeModal = () => {
    setIsOpen1(false);
  };
  const openModal = () => {
    setIsOpen1(true);
  };
  const closeSecondModal = () => {
    setIsOpen2(false);
  };
  const openSecondModal = () => {
    setIsOpen2(true);
  };
  return (
    <ModalContext.Provider
      value={{
        modalIsOpen1,
        closeModal,
        openModal,
        modalIsOpen2,
        closeSecondModal,
        openSecondModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export { ModalContext, ModalProvider };

