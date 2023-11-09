import { Content, StyledButtonClose, Wrapper } from "./Modal.styled";
import PropTypes from 'prop-types';
import sprite from '../../images/sprite.svg';

const Modal = ({ onCloseModal, children }) => {
  const onBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      onCloseModal();
      cleanup();
    }
  };

  const onEscKeyPress = (e) => {
    if (e.key === "Escape") {
      onCloseModal();
      cleanup();
    }
  };

  document.addEventListener("keydown", onEscKeyPress);

  const cleanup = () => {
    document.removeEventListener("keydown", onEscKeyPress);
  };

  return (
    <Wrapper onClick={onBackDropClick}>
      <Content>
        <StyledButtonClose onClick={onCloseModal}>
        <svg width="18" height="18">
          <use href={`${sprite}#icon-close`} />
        </svg>
        </StyledButtonClose>
        {children}
      </Content>
    </Wrapper>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onCloseModal: PropTypes.func,
};

export default Modal;
