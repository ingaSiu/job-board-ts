import styled from 'styled-components';
import Modal from 'react-modal';
import { PropsWithChildren } from 'react';
import { borderRadius, lightGrey, mainBgColor, mediumGrey } from '../../const/styles';

interface StyledModalProps extends PropsWithChildren {
  modalSize: string;
  closeModal: () => void;
  modalIsOpen: boolean;
}

const StyledModal = ({ modalIsOpen, modalSize, closeModal, children }: StyledModalProps) => {
  return (
    <Container isOpen={modalIsOpen} onRequestClose={closeModal} modalSize={modalSize}>
      {children}
    </Container>
  );
};

export default StyledModal;

const Container = styled(Modal)<{ modalSize: string }>`
  min-height: 18rem;
  background-color: ${mainBgColor};
  color: ${mediumGrey};
  border-radius: ${borderRadius};
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: ${borderRadius};
  border: 1px solid ${lightGrey};

  ${({ modalSize }) => {
    if (modalSize === 'large') {
      return `
      margin: 70px 10vw;
      padding: 24px 10vw;
      `;
    } else if (modalSize === 'medium') {
      return `
      margin: 70px 20vw;
      padding: 24px 10vw;
      `;
    } else if (modalSize === 'small') {
      return `
      margin: 70px 25vw;
      padding: 24px 5vw;
    `;
    }
  }}
`;

