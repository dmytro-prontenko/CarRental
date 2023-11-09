import { Content, StyledButtonClose, Wrapper } from './Modal.styled';

const Modal = ({onCloseModal, children}) => {
  const onBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
      cleanup();
    }
  };

  const onEscKeyPress = e => {
    if (e.key === 'Escape') {
      onCloseModal();
      cleanup();
    }
  };

  document.addEventListener('keydown', onEscKeyPress);

  const cleanup = () => {
    document.removeEventListener('keydown', onEscKeyPress);
  };

  return (
    <Wrapper onClick={onBackDropClick}>
      <Content>
        <StyledButtonClose onClick={onCloseModal}>Close</StyledButtonClose>
        {children}
      </Content>
    </Wrapper>
  );
};

export default Modal;

