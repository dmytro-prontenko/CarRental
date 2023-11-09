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
        <StyledButtonClose onClick={onCloseModal}>          <svg width="12" height="12">
            <use href={`../../images/close.svg`} />
          </svg></StyledButtonClose>
        {children}
      </Content>
    </Wrapper>
  );
};

// Modal.propTypes = {
//   children: PropTypes.node,
//   onCloseModal: PropTypes.func,
// };

export default Modal;

